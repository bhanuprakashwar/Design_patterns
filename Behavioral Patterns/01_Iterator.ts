/* 
Definition:
Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.) 
*/

interface SongIterator {
    hasNext(): boolean;
    next(): string;
}

//Iterator
class PlaylistIterator implements SongIterator {
    private songs: string[]
    private currentPosition: number = 0;

    constructor(songs: string[]) {
        this.songs = songs;
    }

    hasNext(): boolean {
        return this.currentPosition < this.songs.length;
    }

    next(): string {
        this.currentPosition++;
        return this.songs[this.currentPosition];
    }
}

interface Playlist {
    createIterator(): SongIterator;
}

// Concrete Collection
class MyPlaylist implements Playlist {
    private songs: string[];
    constructor(songs: string[]) {
        this.songs = songs;
    }

    createIterator(): SongIterator {
        return new PlaylistIterator(this.songs);
    }
}


//Client 
const playlist = new MyPlaylist(['Song1', 'Song2', 'Song3', 'Song4']);
const iterator = playlist.createIterator();

while (iterator.hasNext()) {
    const song = iterator.next();
    console.log("Playing " + song);
}
