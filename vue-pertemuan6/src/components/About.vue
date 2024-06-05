<template>
  <navbar />

  <div class="about-section">
  <div class="inner-container">
    <h1>About Me</h1>
    <p class="text">
      Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang 
      mengambil konsentrasi Software Engineer dan Big Data Analytics dengan pengalaman berorganisasi 
      dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan 
      berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang pengolahan 
      dan analisis data.  
    </p>
    <div class="skills">
      <span>Bahasa Inggris</span>
      <span>Bahasa Pemrograman</span>
      <span>Problem Solving</span>
    </div>
  </div>
</div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family: "Poppins";
  box-sizing: border-box;
}

body{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
}

.about-section{
  background: url(https://fadzrinmadu.github.io/hosted-assets/responsive-about-us-section-using-html/pic.jpg) no-repeat left;
  background-size: 55%;
  background-color: #fdfdfd;
  overflow: hidden;
  padding: 100px 0;
}

.inner-container{
  width: 55%;
  float: right;
  background-color: #fdfdfd;
  padding: 150px;
}

.inner-container h1{
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 900;
}

.text{
  font-size: 13px;
  color: #545454;
  line-height: 30px;
  text-align: justify;
  margin-bottom: 40px;
}

.skills{
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 13px;
}

@media screen and (max-width:1200px){
  .inner-container{
      padding: 80px;
  }
}

@media screen and (max-width:1000px){
  .about-section{
      background-size: 100%;
      padding: 100px 40px;
  }
  .inner-container{
      width: 100%;
  }
}

@media screen and (max-width:600px){
  .about-section{
      padding: 0;
  }
  .inner-container{
      padding: 60px;
  }
}
</style>