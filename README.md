# <img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargle-Head.png" height="84"> Smeargle's Heart

## Summary of the Website 
* Social media centered around art
* Explore and "like" or comment on other people's imaginations (posts)
* Create, edit, and delete your own imaginations
* Customize your profile 
* Clone of the website "DeviantArt"

## Link
[Go to the live site :D](https://smearglesheart.herokuapp.com/#/)

## How to Use Some Things  
<img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+11.29.24+AM.png" height="400">

#### Check out user's profiles
![](https://media.giphy.com/media/gg8UI7ZGiszpOreSft/giphy.gif)


#### Log in and log out
![](https://media.giphy.com/media/JrGSlccHZSasFwz6wj/giphy.gif)

## Technologies 
* Ruby on Rails
* React/Redux
* HTML 
* CSS
* JavaScript
* AWS 
* PostgreSQL

## Features
### Likes 
Implementing the likes was difficult for me. There were some interesting "if" conditions, and this feature taught me a lot more about how React components work. Something that was challenging for me to figure out is how to make sure the star is filled in if I have already liked the imagination. I was running into a problem where whenever I first click on an imagination, the star wouldn't be filled in. But if I refresh than it would act how it's supposed to. This is because I was rendering it according to the state and at the time I didn't know that the constructor only ran once. The way I solved this was by putting debuggers all over the place, seeing how the cycle went, and Googling some things. I also got a lot of help from a TA. I ended up using componentDidUpdate to force the state to change according to the props, because originally the props would change but not the state.  
<img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+10.59.50+AM.png" height="40">

### Profile
The feature itself wasn't too hard to implement, but there was a bug where if you went from another profile then to your own, it would bug out. I spent so long trying to figure out how to fix it and what was wrong. I figured out that the state wasn't updating according to the props and I needed it to do this. Initially, I didn't know why this was happening, so I put debuggers and console.logs on the component to see the order of execution. I realized that the state wouldn't change, so I looked up some things which led to me looking through the React docs, and I came across a very handy lifecycle method, getDerivedStateFromProps. This challenge taught me a lot about React.

## Code
This was the logic I used to dispatch the "like" actions. I really like it because it utilizes a combination of Vanilla JS and React. It showed me that Vanilla JS still has use cases, even though we are using React. I did it this way so if someone spams the "like" button there isn't a bunch of actions being dispatched. Instead, the action is dispatch whenever they leave the page or refresh.
```javascript 
componentCleanup() { 
  if (this.props.currentUser) {
    let like;
    if (!this.state.likeId) {
        like = { imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id }
    } else (
        like = { id: this.state.likeId, imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id }
    )

    if (Boolean(this.state.liked && this.props.currentUser && !this.state.likeId)) {
        this.props.createLike(like)
    } else if (Boolean(!this.state.liked && this.props.currentUser && this.state.likeId)) {
        this.props.deleteLike(like)
    }
  }
}

componentDidMount() { 
  window.addEventListener('beforeunload', this.componentCleanup);
}

componentWillUnmount() { 
  this.componentCleanup();
  window.removeEventListener('beforeunload', this.componentCleanup);
}
```
## Future Features
* Making the home page layout look like DeviantArt's home page

