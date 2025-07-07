<template>
    <div class="px-5 bg-[#001412] text-white pb-5">
        <div class="text-6xl/[70px] font-semibold py-10 ">
            <h2>Have an idea?</h2>
            <router-link to="/contact" class="font-normal underline decoration-3 underline-offset-4">Let’s Talk</router-link>
        </div>
        <div>
            <div class="flex flex-col gap-10 mb-10">
                <div class="flex flex-col gap-5">
                    <div>
                        <p class="pb-2 text-[20px]">
                            Get in touch
                        </p>
                        <p class="font-bold text-[20px]">
                            info@template.com
                        </p>
                    </div>
                    <div>
                        <p class="font-medium pb-3 text-[20px]">Phone</p>
                        <p>
                            +000 111 222 3333<br>+444 555 666 7777
                        </p>
                    </div>
                    <div>
                        <p class="font-medium pb-3 text-[18px]">Address</p>
                        <p>2352 Middlefield Rd, Markham<br>Ontario, Canada</p>
                    </div>
                </div>
                <div>
                    <p class="font-medium mb-4 text-xl">Pages</p>
                    <ul class="flex flex-col gap-2 font-light">
                        <li>Home</li>
                        <li>Service</li>
                        <li>Case Study</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div>
                    <p class="font-medium mb-4 text-xl">Admin</p>
                    <ul class="flex flex-col gap-2 font-light">
                        <li>404</li>
                        <li>Login</li>
                        <li>Licenses</li>
                        <li>Instruction</li>
                        <li>Styleguide</li>
                        <li>Changelog</li>
                        <li>More Templates</li>
                    </ul>
                </div>
                <div>
                    <div class="mb-6">
                        <p class="mb-8 text-xl">Reach Out to Us</p>
                        <div class="flex flex-col gap-6">
                            <div class="flex gap-8">
                                <i class="fa-brands fa-facebook text-[40px]"></i>
                                <i class="fa-brands fa-twitter text-[40px]"></i>
                                <i class="fa-brands fa-instagram text-[40px]"></i>
                            </div>
                            <div class="flex gap-8">
                                <i class="fa-brands fa-skype text-[45px]"></i>
                                <i class="fa-brands fa-whatsapp text-[45px]"></i>
                                <i class="fa-brands fa-linkedin-in text-[45px]"></i>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-xl font-normal">
                        <p class="mb-6">Join our mailing list and get to know exciting stuff at first hand</p>
                        <input type="search" placeholder="johnchoe@gmail.com" class="border-1 w-[220px] h-[56px] bg-white placeholder: text-gray-400 pl-2"><button class="h-[56px] w-[60px] bg-[#00A693]"><i class="fa-regular fa-paper-plane text-white fa-xl"></i></button>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-2">Made it with love by Hexwaave. Powered by Webflow.</p>
                <div class="flex gap-5 justify-center">
                    <a href="">Policy</a>
                    <a href="">Sitemap</a>
                </div>
            </div>
        </div>
    </div>
</template>