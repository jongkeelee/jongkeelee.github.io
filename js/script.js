function menu(idx) {
    var ActiveIdx = [];
    ActiveIdx[idx] = "active";
    document.write(`<div class="header">
    <ul>
        <li style="float:left"><a href="./index.html">Jongkee Lee | 이종기</a></li>
        <li style="float:right"><a href="https://www.linkedin.com/in/jongkee-lee-85845765"><i class="fa-brands fa-linkedin fa-xl"> </i></a></li>
        <li style="float:right"><a href="https://www.instagram.com/jongkee.lee/"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
        <li style="float:right"><a class="`+ ActiveIdx[4] + `"href="./patent.html">PATENT</a></li>
        <li style="float:right"><a class="`+ ActiveIdx[3] + `"href="./award.html">AWARD</a></li>
        <li style="float:right"><a class="`+ ActiveIdx[2] + `"href="./design.html">DESIGN</a></li>
        <li style="float:right"><a class="`+ ActiveIdx[1] + `"href="./family.html">FAMILY</a></li>
        <li style="float:right"><a class="`+ ActiveIdx[0] + `"href="./about.html">ABOUT</a></li>    
    </ul>
</div>`);
}
