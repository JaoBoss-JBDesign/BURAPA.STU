const APP_CONFIG = {

  get term(){
    return localStorage.getItem("term") || "2"
  },

  get year(){
    return localStorage.getItem("year") || "2568"
  },

  get fullText(){
    return `ภาคเรียนที่ ${this.term} ปีการศึกษา ${this.year}`
  }

}
