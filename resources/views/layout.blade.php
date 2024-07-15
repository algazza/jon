<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    @vite('resources/css/app.css')
</head>
<body >
    <section class="fixed z-40 box-border border-[0.5px] border-black shadow-2xl">
          <div class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
            p-2 w-16 overflow-y-auto text-center bg-gray-50 shadow h-screen overflow-hidden font-semibold">
            <div class="text-gray-100 text-xl">
              <div class="p-2.5 mt-1 flex items-center rounded-md">
                <i class="bx bx-pie-chart-alt-2  px-2 py-2 bg-black text-gray-50 rounded-md" onclick="Openbar()"></i>
                <h1 class="text-[15px]  ml-3 text-xl text-gray-200 font-bold pl-[1.1rem]">Dashboard</h1>
              </div>
              <hr class="my-2 text-gray-600">
        
              <div>
        
                <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200">
                    <i class='bx bxl-xing text-black'></i>
                  <span class="text-[18px] ml-6 text-black ">Dashboard</span>
                </div>
        
                <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-200" onclick="dropDown()">
                    <i class='bx bxl-xing text-black' ></i>
                  <div class="flex justify-between w-full items-center">
                    <span class="text-[18px] ml-6 text-black">Storage</span>
                    <span class="text-sm rotate-180" id="arrow">
                      <i class="bi bi-chevron-down text-black"></i>
                    </span>
                  </div>
                </div>
                <div class=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto pl-[3rem]" id="submenu">
                  <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Kredit</h1>
                  <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Personal</h1>
                  <h1 class="cursor-pointer p-2 hover:bg-gray-300 rounded-md mt-1 text-black font-semibold">Friends</h1>
                </div>
                <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600 bottom-0 w-screen mr-[1rem]">
                    <i class='bx bxl-xing' ></i>
                  <span class="text-[15px] ml-6 text-gray-200">Logout</span>
                </div>
              </div>
            </div>
          </div>
          <script>
            function dropDown() {
              document.querySelector('#submenu').classList.toggle('hidden')
              document.querySelector('#arrow').classList.toggle('rotate-0')
            }
            dropDown()
        
            function Openbar() {
              const sidebar = document.querySelector('.sidebar');
              if (sidebar.classList.contains('w-16')) {
                sidebar.classList.remove('w-16');
                sidebar.classList.add('w-60');
              } else if (sidebar.classList.contains('w-60')) {
                sidebar.classList.remove('w-60');
                sidebar.classList.add('w-16');
              } else {
                sidebar.classList.add('w-16');
              }
            }

          </script>
    </section>
    @yield('content')
</body>
</html>