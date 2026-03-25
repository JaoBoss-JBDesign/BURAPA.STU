const SYSTEM_CONFIG = {

  get term(){
    return localStorage.getItem("term") || "2"
  },

  get year(){
    return localStorage.getItem("year") || "2568"
  },

  get fullText(){
    return `ภาคเรียนที่ ${this.term} ปีการศึกษา ${this.year}`
  },

  setTermYear(term, year){
    localStorage.setItem("term", term)
    localStorage.setItem("year", year)
  },

  get query(){
    return `term=${this.term}&year=${this.year}`
  }

}
