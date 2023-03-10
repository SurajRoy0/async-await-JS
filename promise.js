const allPosts = [
    { title: 'Post 1'}
    ]
    
    function viewPosts(){
        return new Promise((res, rej) => {
            allPosts.forEach((value) => {
                console.log(value.title);
                res();
            })
        })
    }
    
    function lastActive(){
        return new Promise((res, rej) => {
            setTimeout(() => {
                let currentHours = new Date().getHours();
                let currentMinutes = new Date().getMinutes();
                let currentSeconds = new Date().getSeconds();
                console.log('Last Active ' + currentHours + " hours " + currentMinutes + ' Mins '+ currentSeconds+ ' seconds ago');
                res();
            }, 1000)
        })
    }
    
function post3 (){
    return new Promise ((res, rej) => {
        setTimeout(() =>{
            allPosts.push({title: 'Post 3'})
            console.log(' New Post Created');
            res();
        },500)
    })
}

function post2 (){
    return new Promise ((res, rej) => {
        setTimeout(() =>{
            allPosts.push({title: 'Post 2'})
            console.log(' New Post Created');
            res();
        },1000)
    })
}

function deletePost(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(allPosts.length > 0){
             let delPost = allPosts.pop();
             console.log("Last Post Deleted")
             res(delPost);
             
            }
            else{
                rej('No Post Available')
            }
        },1000)
    })
}

async function start(){
    await post2();
    await lastActive();
    await post3();
    await lastActive();
    await viewPosts();
    await lastActive();
    await deletePost();
    await viewPosts();
    
}

start().catch((err)=>{
    console.log(err)
})