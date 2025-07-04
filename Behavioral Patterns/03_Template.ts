/* 
Definition:
Allows you to define a skeleton of an algorithm in a base class and let subclasses override the steps without changing the overall algorithm’s structure
*/

abstract class BaseAuthenticator {

    public authenticate(credentials: any) {
        if (!this.validateCredentials(credentials)) {
            return { success: false, message: "Invalid credentials format." };
        }
        // Log every step with getAuthenticatorType to know status
        const isAuthenticated = this.performAuthentication(credentials);
        if (!isAuthenticated) {
            return { success: false, message: `Authentication failed for ${this.getAuthenticatorType()}.` };
        }

        const token = this.generateSessionToken(credentials);
        return { success: true, token: token, message: "Authentication successful." };
    }

    protected validateCredentials(credentials: any): boolean {
        return credentials && credentials.username && credentials.password;
    }

    protected generateSessionToken(credentials: any): string {
        return `jwt-token-${credentials.username}-${Date.now()}`;
    }

    protected abstract performAuthentication(credentials: any): boolean;
    protected abstract getAuthenticatorType(): string; // Helper for logging
}


class PasswordAuthenticator extends BaseAuthenticator {
    protected getAuthenticatorType(): string {
        return "Password";
    }

    protected performAuthentication(credentials: any): boolean {
        return credentials.username === "user123" && credentials.password === "pass123";
    }
}

class OAuthAuthenticator extends BaseAuthenticator {
    protected getAuthenticatorType(): string {
        return "OAuth";
    }
    protected validateCredentials(credentials: any): boolean {
        return credentials && credentials.oauthToken; // Expects an OAuth token
    }

    protected performAuthentication(credentials: any): boolean {
        return credentials.oauthToken === "valid_oauth_token";
    }

    protected generateSessionToken(credentials: any): string {
        return `oauth-session-${credentials.oauthToken.substring(0, 5)}-${Date.now()}`;
    }
}


const passwordAuth = new PasswordAuthenticator();
const passwordResult = passwordAuth.authenticate({ username: "user123", password: "pass123" });
console.log(passwordResult)

// Authenticate using OAuth
const oauthAuth = new OAuthAuthenticator();
const oauthResult = oauthAuth.authenticate({ oauthToken: "valid_oauth_token" });
console.log(oauthResult)