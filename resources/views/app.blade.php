<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    @include('layouts.partials.head')
    @yield('head')
  </head>
  <body class="text-gray-800"
        :class="{ 'overflow-hidden max-h-screen': mobileMenu }"
        x-data="{ mobileMenu: false }">
  <div id="app">
    @include('layouts.partials.header')

    <main>
    @yield('main')
    </main>

    @include('layouts.partials.footer')


  </div>
  @include('layouts.partials.js')

  </body>
</html>
