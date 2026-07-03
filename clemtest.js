const pages = {

video: `
<p>
             
<a href="https://www.youtube.com/watch?v=b4sLmnL_m5w" target="_blank" rel="noopener noreferrer" class="mv">
  <img src="clem/callmewhenyou'rehome.jpg" alt="Call Me When You're Home" width="600">
</a><br>
"Call Me When You're Home" Official Music Video<br>

<button class="back-button" onclick="goBack()">back</button>
`,

live: `
<div class="live">
    <div class="show">
        <span>AUG 21, 2026</span>
        <span>The Bowery, NYC</span>
    </div>

    <div class="show">
        <span>AUG 24, 2026</span>
        <span>Gold Sounds, NYC</span>
    </div>
<button class="back-button" onclick="goBack()">back</button>
`,

about: `
<p>
<img src="clem/legos.jpg" alt="lego girls" width="400"><br>
<br>Harper (left), Neve (middle), and Evie (right) are unfortunately stuck in the bodies of three lego figurines. 
They get to be humans again when they sing in perfect harmony.
</p>
<button class="back-button" onclick="goBack()">← back</button>
`,

contact: `
<p>
booking: @clementineband53@gmail.com <br>
          management: @kate.ortiz@yale.edu <br>
          instagram: @clementinesmp3 <br>
          tiktok: @clementinetheband <br>
          </p>

<button class="back-button" onclick="goBack()">← back</button>

`,

music: `
<p>
<a href="https://distrokid.com/hyperfollow/clementine16/fear-the-bird" target="_blank" rel="noopener noreferrer" class="EP">
  <img src="clem/EP.jpg" alt="Call Me When You're Home" width="400">
</a><br>
Fear the Bird, 2026
<br>
</p>
<button class="back-button" onclick="goBack()">← back</button>
`

};

function showPage(page) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("content").innerHTML = pages[page];
}

function goBack() {
    document.getElementById("content").innerHTML = "";
    document.getElementById("menu").style.display = "block";
}