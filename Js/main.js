
  
(function(){

    const video1 = new Video("to", "https://i.ytimg.com/vi/-ZAEb6pVfOs/hqdefault.jpg", "https://i.ytimg.com/vi/-ZAEb6pVfOs/hqdefault.jpg", "This is decription area")

    const videos = [video1, video1, video1, video1];

    const video_area = document.getElementById('videos');
    console.log(videos);
    videos.forEach(video => {
    
        const divP = document.createElement("DIV");
        divP.setAttribute('class', 'w3-col l3 m6 s12');

        const divC = document.createElement("DIV");
        divC.setAttribute('class', 'w3-margin-top w3-round w3-light-gray w3-padding kel-hover');
        divC.onclick = function(){ 
            window.open(video.getLink(), "_self");
        }
        
        const img = document.createElement("IMG");
        img.setAttribute("src", video.getImg());
        img.setAttribute('class', 'w3-image');
        img.setAttribute('style', 'width:100%');

        const title = document.createElement("H3");
        title.innerText = video.getTitle();

        const about = document.createElement("P");
        about.setAttribute('class', 'w3-justify w3-small')
        about.innerText = video.getDescription();

        divC.appendChild(img);
        divC.appendChild(title);
        divC.appendChild(about);

        divP.appendChild(divC);

        video_area.appendChild(divP);

    });

        // <div class="w3-col l3 m6 s12">
        //     <div class='w3-margin-top w3-round w3-light-gray w3-padding kel-hover'>
        //         <img src="https://i.ytimg.com/vi/-ZAEb6pVfOs/hqdefault.jpg" alt="" style="width:100%" class='w3-image'>
        //         <h3>Title</h3>
        //         <p class='w3-justify w3-small'>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos cum eveniet sint quo saepe
        //             magnam assumenda non eligendi enim accusamus omnis animi error illum excepturi, doloribus quaerat obcaecati! Quas.
        //         </p>
        //     </div>
        // </div>

})();