<template>
  <navbar />

  
<ul id="buttons">
  <li class="fb">
    <a href="#facebook" title="Facebook">
      <i class="fab fa-facebook-f"></i>
    </a>
  </li>
  <li class="tw">
    <a href="#twitter" title="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
  </li>
  <li class="in">
    <a href="http://instagram.com/rachmasari_a.r" title="Instagram" target="_blank">
      <i class="fab fa-instagram"></i>
    </a>
  </li>
  <li class="gh">
    <a href="https://github.com/RachmasariAR" title="Github">
      <i class="fab fa-github"></i>
    </a>
  </li>
</ul>
</template>

<style scoped>
body {
	margin: 0;
	padding: 0;
	line-height: 1em;
}

a {
	color: #4d4d4d;
	text-decoration: none;
}

.fb a, .fb:before, .fb { background: #3b5999; color: #3b5999; }
.tw a, .tw:before, .tw { background: #55acee; color: #55acee; }
.in a, .in:before, .in { background: #e4405f; color: #e4405f; }
.gh a, .gh:before, .gh { background: #333333; color: #333333; }



ul#buttons {
	padding: 0;
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	list-style: none;
	display: grid;
	grid-template-columns: repeat(4,1fr);
	grid-gap: 10px;
}

ul#buttons:before {
	content: "Social Hovers";
	font-size: 2em;
	font-family: Arial;
	font-weight: 300;
	color: #4d4d4d;
	position: absolute;
	width: 100%;
	text-align: center;
	margin-top: -60px;
}

ul#buttons li {
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	box-sizing: border-box;
	background: transparent;
	border-radius: 12px;
	position: relative;
	overflow: hidden;
	transition: .5s;
	box-shadow: 0px 8px 16px -6px,
				0px 0px 16px -6px;
}

ul#buttons li a {
	display: block;
	widows: 100%;
	height: 100%;
	font-size: 1.25em;
	background: transparent;
	transition: .5s;
	animation: icon-out .5s forwards;
	animation-timing-function: cubic-bezier(0.5, -0.6, 1, 1);
}

ul#buttons li:before {
	content: "";
	width: 90px;
	height: 90px;
	display: block;
	position: absolute;
	transform: rotate(-45deg) translate(-110%, -23px);
	z-index: -2;
	animation: back-out .5s forwards;
	animation-timing-function: cubic-bezier(0.5, -0.6, 1, 1);
}

ul#buttons li:hover a {
	animation: icon-in .5s forwards;
	animation-timing-function: cubic-bezier(0, 0, 0.4, 1.6);
}

ul#buttons li:hover:before { 
	animation: back-in .5s forwards;
	animation-timing-function: cubic-bezier(0, 0, 0.4, 1.6);
}

@keyframes back-in {
    0% { transform: rotate(-45deg) translate(-110%, -23px); }
	80% { transform: rotate(-45deg) translate(5%, -23px); }
	100% { transform: rotate(-45deg) translate(0%, -23px); }
}

@keyframes back-out {
    0% { transform: rotate(-45deg) translate(0%, -23px); }
	20% { transform: rotate(-45deg) translate(5%, -23px); }
	100% { transform: rotate(-45deg) translate(-110%, -23px); }
}

@keyframes icon-in {
    0% { font-size: 1.25em; }
	80% { color: #fff; font-size: 1.5em; }
	100% { color: #fff; font-size: 1.35em; }
}

@keyframes icon-out {
	0% { color: #fff; font-size: 1.35em; }
	20% { color: #fff; font-size: 1.5em; }
	100% { font-size: 1.25em; }
}
</style>