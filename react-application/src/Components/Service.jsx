import React from "react";
import './Styles/Service-Styles.css';


function Service() {

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (   
    <div className="container">
      <div className="service-container">
      <div>
        <h1>This is heading 1</h1>       
        <p>I saw some people on internet saying that if you type "lorem" in the view of ASP.NET, and then hit TAB, then it will be generated a "Lorem Ipsum" with 30 words.

            I think its great, but I can't make it happen! What am I doing wrong?</p>
        </div>

        <h1>Responsive Masonry Grid</h1>

<div class="masonry">
  <div class="item">
    1
    <img src="http://www.pixeden.com/media/k2/galleries/468/001-business-card-clip-brand-mock-up-vol-20-psd.jpg"/>
  </div>
  <div class="item">
    2
    <img src="http://www.graphicsfuel.com/wp-content/uploads/2015/11/branding-mockup-psd.jpg"/>
  </div>
  <div class="item">
    3
    <img src="http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg"/>
  </div>
  <div class="item">
    5
    <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2013/mockup/23.jpg"/>
  </div>
  <div class="item">
    7
    <img src="http://www.pixeden.com/media/k2/galleries/754/001-businesscard-mockup-presentation-psd-free-resource.jpg"/>
  </div>
  <div class="item">
    9
    <img src="http://www.blugraphic.com/wp-content/uploads/2014/04/Folded-Page-Mockup1.jpg"/>
  </div>
  <div class="item">
    10
    <img src="http://cdn.designinstruct.com/files/542-free-branding-identity-mockups/29-branding-identity-mock-up-vol-8-full.jpg"/>
  </div>
    <div class="item">
    12
    <img src="http://www.pixeden.com/media/k2/galleries/640/001-business-card-cardboard-mockup-presentation-wall-free-psd.jpg"/>
  </div>

  


</div>
<h4>Photo from <a href="https://www.google.com.tw/search?q=mock+up&espv=2&tbm=isch&source=lnt&tbs=isz:m&sa=X&ved=0ahUKEwidx5_s29DLAhVIj5QKHRblBf8QpwUIEw&dpr=1&biw=1920&bih=971"> google</a>.</h4>



      </div>
    </div>
  );
}

export default Service;


