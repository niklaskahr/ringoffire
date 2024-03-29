import { Component } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Firestore, addDoc, collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  games$: any;
  gameDb = collection(this.firestore, 'games');
  constructor(private firestore: Firestore, private router: Router) { }


  startGame() {
    let game = new Game();
    addDoc(this.gameDb, game.toJson()).then((gameInfo) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });
    // this.games$ = collectionData(collection(this.firestore, 'games'));
    // this.games$.subscribe((games: any) => console.log('startGame(): ' + games))
  }
}
