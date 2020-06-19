# <img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargle-Head.png" height="84"> Smeargle's Heart

## Technologies 
* Ruby on Rails
* React/Redux
* HTML 
* CSS
* JavaScript
* AWS 
* PostgreSQL

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

## Features
### Likes 
Users have the ability to like imaginations. I fetch the likes according to what the imagination id is in the url. Because the state is normalized, the likes are easy to manipulate.  
<img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+10.59.50+AM.png" height="40">

### Profile
Users have their own profiles. I fetch the user according to the username in the url. That users has an association to imaginations. I fetch all of the corresponding imaginations of the user. Also, ActiveStorage is used to attach a profile photo to the user if they uploaded one. 

## Code
This was how I handle creating and editing an imagination. Since the application uses ActiveStorage, I have to be able to upload pictures to AWS S3.
```javascript 
// imagination_form.jsx 
formSubmission(e) { 
        e.preventDefault();
        const formData = new FormData();
        if (this.props.formType === "Edit") { 
            formData.append('imagination[id]', this.props.imagination.id)
        }
        formData.append('imagination[title]', this.state.title);
        formData.append('imagination[description]', this.state.description);
        formData.append('imagination[artist_id]', this.state.artist_id); 
        if (this.state.imageFile) {
            formData.append('imagination[image]', this.state.imageFile);
        } 
        this.props.action(formData)
            .then(res => {
                this.goImagination(res)
            })
    }

    goImagination(res) { 
        this.props.history.push(`/imaginations/${res.imagination.id}`)
    }
    
// imagination_api_util.js
export const createImagination = imagination => {
    return $.ajax({
        method: "POST", 
        url: "/api/imaginations",
        data: imagination,
        contentType: false,
        processData: false
    })
}
```
## Future Features
* Making the home page layout look like DeviantArt's home page

