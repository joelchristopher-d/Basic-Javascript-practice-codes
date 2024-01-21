function student(syud,talent){
    this.syud=syud
    this.talent=talent
}
student.prototype.study=function(){
return this.syud+"  "+this.talent+"<br>"
}
var s1=new student("joel","be")
var s2=new student("sil","bee")
document.write(s1.study())
document.write(s2.study())