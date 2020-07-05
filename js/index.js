
const main = ()=>
{


    const hP = document.querySelector("#home-page");
    const sP = document.querySelector("#second-page");

    // the puprose of this is to know which DOM is going to load!!!! 
    if(hP !=null)
    {

        const button = document.querySelector("#but");

        console.log(location)

        const movie  = {
            id : 127,
            title : "Titanic",
            description : "Rose left Jack to drown",
            rating:10,
            actors : ["Jack","Rose"]
        }
    
        // put the movie inside of the session 
    
    
    
        button.addEventListener("click",()=>{
    
    
                //must stringfy for arrays and/or objects
        sessionStorage.setItem("movie", JSON.stringify(movie) );
    
    
        location.href="html/second.html";
    
        })



    }
    else if(sP!=null)
    {

        

            //Test to see if Session Storage exists and if it does do my bacchanal
            //if not , redirect user to home page
            if(sessionStorage.getItem("movie")==null)
            {
                location.href="../index.html";
            }

            else
            {

              const sessionData = JSON.parse(sessionStorage.getItem("movie"));

              const div = document.querySelector("#container");

              div.innerHTML=
            `<div class="container-data">ID:${sessionData.id}</div>
            <div class="container-data">Title: ${sessionData.title}</div>
            <div class="container-data">Description${sessionData.description}</div>
            <div class="container-data">rating${sessionData.rating}</div>
            
            <div class="youtube-container">
            
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/8AWqOBj_BqA" 
            frameborder="0" allow="accelerometer; autoplay; 
            encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>

            </div>
            
            `;

            
              

            }




    }


}

main();