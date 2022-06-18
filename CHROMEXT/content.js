const generateHTML = (page) => {
    return `<div class="text">
    <div>Nothing to see here.</div>
    <h1>GET OFF ${page}</h1>
    <hr>
    <br>
    <div>Studying is more important :D</div>
  </div>
  
  <div class="astronaut">
    <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" class="src">
  </div>
  <script>
  document.addEventListener("DOMContentLoaded", function() {

    var body = document.body;
    setInterval(createStar, 100);
  
    function createStar() {
      var right = Math.random() * 500;
      var top = Math.random() * screen.height;
      var star = document.createElement("div");
      star.classList.add("star")
      body.appendChild(star);
      setInterval(runStar, 10);
      star.style.top = top + "px";
  
      function runStar() {
        if (right >= screen.width) {
          star.remove();
        }
        right += 3;
        star.style.right = right + "px";
      }
    }
  })
  </script>
  <script type="text/javascript">
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function() {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					head.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					head.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function(msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			console.log('Live reload enabled.');
		})();
	}
	// ]]>
</script>`;
}

function generateCSS() {
    return `
    <style>
    body{
        margin:0;
        padding:0;
        font-family: 'Tomorrow', sans-serif;
        height:100vh;
        background-image: linear-gradient(to top, #2e1753, #1f1746, #131537, #0d1028, #050819);
        display:flex;
        justify-content:center;
        align-items:center;
        overflow:hidden;
      }
      .text{
        position:absolute;
        top:10%;
        color:#fff;
        text-align:center;
      }
      h1{
        font-size:60px;
      }
      .star{
        position:absolute;
        width:2px;
        height:2px;
        background:#fff;
        right:0;
        animation:starTwinkle 3s infinite linear;
      }
      .astronaut img{
        width:100px;
        position:absolute;
        top:55%;
        animation:astronautFly 6s infinite linear;
      }
      @keyframes astronautFly{
        0%{
          left:-100px;
        }
        25%{
          top:50%;
          transform:rotate(30deg);
        }
        50%{
          transform:rotate(45deg);
          top:55%;
        }
        75%{
          top:60%;
          transform:rotate(30deg);
        }
        100%{
          left:110%;
          transform:rotate(45deg);
        }
      }
      @keyframes starTwinkle{
        0%{
           background:rgba(255,255,255,0.4);
        }
        25%{
          background:rgba(255,255,255,0.8);
        }
        50%{
         background:rgba(255,255,255,1);
        }
        75%{
          background:rgba(255,255,255,0.8);
        }
        100%{
          background:rgba(255,255,255,0.4);
        }
      }
      </style>
      `;
}

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateCSS;
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateCSS;
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
    case "www.chess.com":
        document.head.innerHTML = generateCSS;
        document.body.innerHTML = generateHTML("CHESS");
        break;
    case "www.twitch.tv":
        document.head.innerHTML = generateCSS;
        document.body.innerHTML = generateHTML("TWITCH");
        break;
    
}