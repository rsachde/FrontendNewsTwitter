function validateForm() {

  var country= document.getElementById("country").value;
  var city= document.getElementById("city").value;
  console.log(city, country);

//// 1. Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
//// 2. Configure it: GET-request for the URL  
 
xhr.open("POST", "https://google.com", true);
  xhr.setRequestHeader('Content-Type', 'application/json');

// 3. Send the request over the network    
  xhr.send(JSON.stringify({
      Country: country,
      City: city
  }));

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
  }
};    

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};

console.log(xhr.response);
}

//Display output to the screen 
function readJSON()
{

  var data = {
    "sports": [
      {
        "countryCode": "us",
        "type": "sports",
        "title": "Boston Marathon postponed to September 14, Boston Mayor Marty Walsh says - WCVB Boston",
        "description": "The 2020 Boston Marathon will be postponed to September amid concerns about COVID-19, Boston Mayor Marty Walsh announced Friday.",
        "url": "https://www.wcvb.com/article/announcement-boston-marathon-march-13/31467785",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/2017-boston-marathon-ap-photos-5-1492444090.jpg?crop=1.00xw:0.728xh;0,0.202xh&resize=1200:*"
      },
      {
        "countryCode": "us",
        "type": "sports",
        "title": "Coronavirus live updates: 2020 Masters postponed; Champions League​, Premier League​ suspend games - CBSSports.com",
        "description": "The coronavirus is causing sports cancellations and postponements all across the world",
        "url": "https://www.cbssports.com/general/news/coronavirus-live-updates-2020-masters-postponed-champions-league-premier-league-suspend-games/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2020/03/13/0cdc5b5a-939d-4560-9727-87b5e45f3f74/thumbnail/1200x675/eb23b477bf3c1dd2e6e8eb5fe4d74cc1/empty-stadium-champions-league.jpg"
      }
    ],
    "entertainment": [
        {
          "countryCode": "us",
          "type": "entertainment",
          "title": "'Bachelor' stars Peter Weber, Madison Prewett split 2 days after finale - Fox News",
          "description": " \"Bachelor\" star Peter Weber and Madison Prewettt have split two days following Tuesday's emotional finale, where the pair reunited after Weber parted ways with fiancee Hannah Ann Sluss.",
          "url": "https://www.foxnews.com/entertainment/bachelor-peter-weber-madison-prewett-after-finale",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/03/Peter-Weber-and-Madison-Prewett-3-ABC.jpg"
        },
        {
          "countryCode": "us",
          "type": "entertainment",
          "title": "Stephen Colbert, Jimmy Fallon go off the rails as their late-night shows have no audiences - The Washington Post",
          "description": "As a result of coronavirus precautions, Colbert and Fallon's shows are now on hiatus until March 30.",
          "url": "https://www.washingtonpost.com/arts-entertainment/2020/03/13/late-night-colbert-fallon-no-audience/",
          "urlToImage": "https://www.washingtonpost.com/resizer/jMvFVkHXZJetvD8diW6eN-NJ2RQ=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5AP5YHGW6FD6XK3RK4KFUTTAGI.jpg"
        }
      ],
      "health": [
        {
          "countryCode": "us",
          "type": "health",
          "title": "Trump administration rolls out new coronavirus push, names HHS testing czar - POLITICO",
          "description": "“The changes have been made and testing will soon happen on a very large scale basis,” Trump said in a pair of tweets Friday morning.",
          "url": "https://www.politico.com/news/2020/03/13/trump-coronavirus-testing-128048",
          "urlToImage": "https://static.politico.com/ac/bd/54203ce24294b994e06164beb9c6/200313-brett-giroir-gty-773.jpg"
        },
        {
          "countryCode": "us",
          "type": "health",
          "title": "Penn Medicine bans most hospital visitors amid coronavirus spread; Erin Express canceled - The Philadelphia Inquirer",
          "description": "All Montgomery County schools, community centers, gyms and entertainment venues will be shut down for two weeks. In Philadelphia, 63 schools are closed today. Sports league are suspending their seasons and events are continuing to be canceled as officials lim…",
          "url": "https://www.inquirer.com/health/coronavirus/live/coronavirus-covid19-philadelphia-pennsylvania-new-jersey-confirmed-case-updates-news-20200313.html",
          "urlToImage": "https://www.inquirer.com/resizer/mEAysx_78-pwrg5mcOELUFftNnE=/1200x0/center/middle/www.inquirer.com/resizer/nVr3zs0lI8sr6xfTDK-wfhAQdVA=/1200x0/center/middle/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/OJGDIG65V5BS3JG7M34RSUK4UE.jpg"
        }
      ]};
      function esc_quot(text)
      {
          return text.replace("/\//g", "/\///\//g");
      }
      data = esc_quot(JSON.stringify(data));
      console.log(data);
    try{
      var mydata = JSON.parse(data);
    }
    catch(error){
      console.log(error);
    }

      
        
//data: '{ id: "' + esc_quot(news_id) + '", title: "' + esc_quot(news_title) + '", body: "' + esc_quot(news_body) + '" }',

      var city= document.getElementById("city").value;
      var element= document.createElement("h5");
      element.setAttribute("class", "heading");
      console.log(document.getElementById("city").city);
      element.textContent="Latest Sports News of " + city +" city";
      
      var parent= document.getElementById("main");
      parent.remove();  

      document.body.appendChild(element);

      var divMain= document.createElement('div');
      divMain.setAttribute("class", "wrapper");
  

      for(var i=0; i<mydata.sports.length; i++)
      {
          var val =mydata.sports[i].urlToImage;
          var div= document.createElement('div');
          var heading= document.createElement('h5');
          var a= document.createElement("a");
          a.href=mydata.sports[i].url;
          var link = document.createTextNode(mydata.sports[i].url);
          a.appendChild(link);
          a.setAttribute= ("class", "aContainer");
          div.setAttribute("class","content");
          var image = document.createElement('img');
          image.src = val;
          image.setAttribute("class", "imageContainer");
          div.appendChild(image);
          heading.setAttribute("class", "h1container");
          heading.textContent= mydata.sports[i].description;
          div.appendChild(heading);
          div.appendChild(a);
          var column= document.createElement("div");
          column.setAttribute("class", "column");
          column.appendChild(div)
          divMain.appendChild(column);
          //document.body.appendChild(column);   
      }
      
      var elements= document.createElement("h5");
      elements.setAttribute("class", "heading");
      elements.textContent="Latest Entertainment News of " + city +" city";
      
      divMain.appendChild(elements);
      for(var i=0; i<mydata.entertainment.length; i++)
      {
          var val =mydata.entertainment[i].urlToImage;
          var div= document.createElement('div');
          var heading= document.createElement('h5');
          var a= document.createElement("a");
          a.href=mydata.entertainment[i].url;
          var link = document.createTextNode(mydata.entertainment[i].url);
          a.appendChild(link);
          a.setAttribute= ("class", "aContainer");
          div.setAttribute("class","content");
          var image = document.createElement('img');
          image.src = val;
          image.setAttribute("class", "imageContainer");
          div.appendChild(image);
          heading.setAttribute("class", "h1container");
          heading.textContent= mydata.entertainment[i].description;
          div.appendChild(heading);
          div.appendChild(a);
          var column= document.createElement("div");
          column.setAttribute("class", "column");
          column.appendChild(div)
          divMain.appendChild(column);
          //document.body.appendChild(column);   
      }
      
      var elements= document.createElement("h5");
      elements.setAttribute("class", "heading");
      elements.textContent="Latest Health News of " + city +" city";
      
      divMain.appendChild(elements);

      for(var i=0; i<mydata.health.length; i++)
      {
          var val =mydata.health[i].urlToImage;
          var div= document.createElement('div');
          var heading= document.createElement('h5');
          var a= document.createElement("a");
          a.href=mydata.health[i].url;
          var link = document.createTextNode(mydata.health[i].url);
          a.appendChild(link);
          a.setAttribute= ("class", "aContainer");
          div.setAttribute("class","content");
          var image = document.createElement('img');
          image.src = val;
          image.setAttribute("class", "imageContainer");
          div.appendChild(image);
          heading.setAttribute("class", "h1container");
          heading.textContent= mydata.health[i].description;
          div.appendChild(heading);
          div.appendChild(a);
          var column= document.createElement("div");
          column.setAttribute("class", "column");
          column.appendChild(div)
          divMain.appendChild(column);
          //document.body.appendChild(column);   
      }
      
      document.body.appendChild(divMain);   
}