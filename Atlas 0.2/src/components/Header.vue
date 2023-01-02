<template>
<div class="wrapper" style="visibility: hidden">
  <div id="header" class="header nav fixed-top">
    <div class="row w-100 p-2">
        <div class="col-4 d-flex justify-content-center align-items-center">
            <img class="logo-icon px-1" src="../assets/logostarz.png" alt="">
            <img class="logo" src="../assets/logo.png" alt="">
        </div>
        <div class="col-8 d-flex justify-content-center align-items-center">
  
            <ul class="d-flex">
                <li><a>About</a></li>
                <li><a>Our Process</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
  </div>
  
</div>
</template>
<script>
export default {
    
}
</script>
<style>

    .wrapper {
        min-height: 7vh;
    }
    .header{
        height:auto;
        width: 80vw;
        margin: auto;
        border-bottom: 1px inset rgba(255, 255, 255, 0.113);
        color: rgba(255, 255, 255, 0.441);
        z-index: 2;
        backdrop-filter: blur(7.7px);
        opacity: 1;
    }
    .logo{
        width: 30%;
    }
    .logo-icon{
        width: 20%;
    }



    ul{
        margin: auto;
    }

    li{
        padding-left: 1em;
        padding-right: 1em;
        list-style-type: none;
        font-size: 1.3em;
        font-family: exo-2;
        transition: .5s;
        cursor: pointer;
        
    }

    li:hover{
        color: white;
    }

   


    
</style>