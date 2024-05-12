class HomePage  
{

constructor (page) 
{
this.page = page ; 
this.menu = "//img[@alt = 'menu']" ;
this.logOut = "//button[text() = 'Sign out']" ;


}

async logOutApplication () 
{

   await this.page.click(this.menu) ;
   await this.page.click(this.logOut) ; 
}

}
//export the class 
module.exports = HomePage ;