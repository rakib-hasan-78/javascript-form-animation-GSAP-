const footer = ()=>{


    //footer---->
    const footer = document.getElementById('footer');
    footer.innerHTML=`
                <main>
                <div class="container">
                    <div class="d-flex align-items-center justify-content-center flex-column">
                        <span id="footer-copy-right" class="text-capitalize text-white">
                            &copy; ${new Date().getFullYear()} all the right reserved.
                        </span>
                        <span id="footer-credit" class="text-white text-capitalize">
                            develped by <span id="name" class="text-700 text-name">md rakibul hasan</span>
                        </span>
                    </div>
                </div>
            </main>
    `

}
export default footer;