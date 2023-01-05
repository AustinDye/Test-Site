<script>

</script>

<template>
    <div class="containerr">
        <div class="white-brick"></div>
        <div class="wrapper text-center">
            <h1 class="section-header">What sets us apart?</h1>
            <span>
                <ul>
                    <li>Individualized Designs</li>
                    <li>Custom App Solutions</li>
                    <li>FullStack Knowledge</li>
                    <li></li>
                </ul>
            </span>
            <div class="body-one">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit incidunt enim aperiam eligendi quis perferendis asperiores
                     optio inventore illum facilis atque neque, ea, quidem voluptas
                     ab ad sequi ducimus! Dolores
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit incidunt enim aperiam eligendi quis perferendis asperiores
                     optio inventore illum facilis atque neque, ea, quidem voluptas
                     ab ad sequi ducimus! Dolores
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.white-brick{
    height: 66%;
    width: 100%;
    margin-top:20%;
    position: absolute;
    background: url('../assets/path5472.png');
    z-index: -1;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
.containerr {
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    height: 40vw;
    border-radius: 40px;
    position: absolute;
    bottom: -40vh;
 
    

}
h1{
    color: black;
    font-size: 4em;
    font-family: exo-2;
    font-weight: bolder;
    padding-bottom: 5vh;
    width: 50vw;
    position: absolute;
  
    top: 0;
  
    
}

ul{
    width: 50vw;
    position: absolute;
    top: 15vh;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1vh;
    border-bottom:  rgba(0, 0, 0, 0.417) 5px solid;
}

li{
    font-family: exo-2;
    font-size: 1.2em;
    font-weight: 300;

}

span{
   
}

.body-one{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;

    top: 22.5vh;
    width: 50vw;
    font-size: 1.5em;
 
}
</style>