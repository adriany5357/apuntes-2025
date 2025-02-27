import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IbraComponent } from './pages/ibra/ibra.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path:"ibra",
        component: IbraComponent
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"pokemon",
        component: PokemonComponent
    },
    {
        path: "**",
        redirectTo: "home"

    }






];
