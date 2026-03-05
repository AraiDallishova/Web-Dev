import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(a => {
      this.album = a;
      this.loading = false;
    });
  }

  save() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe();
      alert('Album updated!');
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
@Component({
  selector: 'app-album-detail',
  imports: [],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {}
