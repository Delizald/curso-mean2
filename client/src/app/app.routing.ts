import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import user
import { HomeComponent } from './components/home.component';
import { UserEditComponent } from './components/user-edit.component';
//import artist
import {ArtistListComponent} from './components/artist-list.component';
import {ArtistAddComponent } from './components/artist-add.component';
import {ArtistEditComponent} from './components/artist-edit.component';
import {ArtistDetailComponent} from './components/artist-detail.component';
//Import album
import { AlbumAddComponent } from './components/album-add.component';
import { AlbumEditComponent } from './components/album-edit.component';
import { AlbumDetailComponent } from './components/album-detail.component';
//import song
import { SongAddComponent } from './components/song-add.component';
import { SongEditComponent } from './components/song-edit.component';

const appRoutes: Routes = [
    {path: '',component: HomeComponent },
    {path: 'artistas/:page',component: ArtistListComponent},
    {path: 'crear-artista/:page',component: ArtistAddComponent},
    {path: 'editar-artista/:id',component: ArtistEditComponent},
    {path: 'artista/:id',component: ArtistDetailComponent},
    {path: 'crear-album/:artist',component: AlbumAddComponent},
    {path: 'editar-album/:id',component: AlbumEditComponent},
    {path: 'crear-tema/:album',component: SongAddComponent},
    {path: 'editar-tema/:id',component: SongEditComponent},
    {path: 'album/:id',component: AlbumDetailComponent},
    {path: 'mis-datos',component: UserEditComponent},
    {path: '**',component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);