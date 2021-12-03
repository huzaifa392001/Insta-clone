import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoryComponent } from './story/story.component';
import { SwiperModule } from 'swiper/angular';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './profile/user-details/user-details.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    HeaderComponent,
    StoryComponent,
    PostComponent,
    SidebarComponent,
    SuggestionsComponent,
    FooterComponent,
    ProfileComponent,
    UserDetailsComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
