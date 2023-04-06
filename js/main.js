"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
  const home = document.querySelector('.home');

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let homeCenter = home.offsetHeight / 2;
    // console.log(scrollTop);
    // console.log(homeCenter);
    if (scrollTop > homeCenter) {
      console.log('bingo');
    }
  });
}

// Events click
document.addEventListener("click", documentActions);
function documentActions(e) {
  const targetEl = e.target;

  // burger menu
  if (targetEl.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  //ahchor links
  if (targetEl.closest('[data-goto]')) {
    e.preventDefault();
    //close burger by tap menu links on mobile
    document.documentElement.classList.contains('menu-open') ? document.documentElement.classList.remove('menu-open') :
      null;

    const goTo = targetEl.closest('[data-goto]').dataset.goto;
    const goToEl = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;
    if (goToEl) {
      window.scrollTo({
        top: goToEl.offsetTop - (headerHeight + 15),
        behavior: "smooth"
      })
    }
  }
};

//Launch circle progressbar
function startCircles() {
  const progressValues = document.querySelectorAll('.skill__progress span');
  progressValues.forEach((element) => {
    const progressEl = element.closest('.skill__progress');
    let progressNumber = element.textContent;
    (progressNumber.slice(-1) === '%') ?
      progressNumber = +progressNumber.slice(0, -1) : progressNumber = +progressNumber;

    let progressValueStart = 0;
    let progressValueEnd = progressNumber;
    let speed = 20;
    let progress = setInterval(() => {
      progressValueStart++;
      element.textContent = `${progressValueStart}%`;
      progressEl.style.background = `conic-gradient(#FF6464 ${progressValueStart * 3.6}deg, #fff 0deg)`;
      if (progressValueStart === progressValueEnd) {
        clearInterval(progress);
      }
    }, speed);
  });
};
startCircles();




//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgd2luZG93TG9hZCk7XG5cbmZ1bmN0aW9uIHdpbmRvd0xvYWQoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGxldCBob21lQ2VudGVyID0gaG9tZS5vZmZzZXRIZWlnaHQgLyAyO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbFRvcCk7XG4gICAgLy8gY29uc29sZS5sb2coaG9tZUNlbnRlcik7XG4gICAgaWYgKHNjcm9sbFRvcCA+IGhvbWVDZW50ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdiaW5nbycpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEV2ZW50cyBjbGlja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50QWN0aW9ucyk7XG5mdW5jdGlvbiBkb2N1bWVudEFjdGlvbnMoZSkge1xuICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuXG4gIC8vIGJ1cmdlciBtZW51XG4gIGlmICh0YXJnZXRFbC5jbG9zZXN0KCcuaWNvbi1tZW51JykpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG4gIH1cblxuICAvL2FoY2hvciBsaW5rc1xuICBpZiAodGFyZ2V0RWwuY2xvc2VzdCgnW2RhdGEtZ290b10nKSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2Nsb3NlIGJ1cmdlciBieSB0YXAgbWVudSBsaW5rcyBvbiBtb2JpbGVcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LW9wZW4nKSA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKSA6XG4gICAgICBudWxsO1xuXG4gICAgY29uc3QgZ29UbyA9IHRhcmdldEVsLmNsb3Nlc3QoJ1tkYXRhLWdvdG9dJykuZGF0YXNldC5nb3RvO1xuICAgIGNvbnN0IGdvVG9FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZ29Ubyk7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLm9mZnNldEhlaWdodDtcbiAgICBpZiAoZ29Ub0VsKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IGdvVG9FbC5vZmZzZXRUb3AgLSAoaGVhZGVySGVpZ2h0ICsgMTUpLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgfSlcbiAgICB9XG4gIH1cbn07XG5cbi8vTGF1bmNoIGNpcmNsZSBwcm9ncmVzc2JhclxuZnVuY3Rpb24gc3RhcnRDaXJjbGVzKCkge1xuICBjb25zdCBwcm9ncmVzc1ZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbF9fcHJvZ3Jlc3Mgc3BhbicpO1xuICBwcm9ncmVzc1ZhbHVlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NFbCA9IGVsZW1lbnQuY2xvc2VzdCgnLnNraWxsX19wcm9ncmVzcycpO1xuICAgIGxldCBwcm9ncmVzc051bWJlciA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgKHByb2dyZXNzTnVtYmVyLnNsaWNlKC0xKSA9PT0gJyUnKSA/XG4gICAgICBwcm9ncmVzc051bWJlciA9ICtwcm9ncmVzc051bWJlci5zbGljZSgwLCAtMSkgOiBwcm9ncmVzc051bWJlciA9ICtwcm9ncmVzc051bWJlcjtcblxuICAgIGxldCBwcm9ncmVzc1ZhbHVlU3RhcnQgPSAwO1xuICAgIGxldCBwcm9ncmVzc1ZhbHVlRW5kID0gcHJvZ3Jlc3NOdW1iZXI7XG4gICAgbGV0IHNwZWVkID0gMjA7XG4gICAgbGV0IHByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgcHJvZ3Jlc3NWYWx1ZVN0YXJ0Kys7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7cHJvZ3Jlc3NWYWx1ZVN0YXJ0fSVgO1xuICAgICAgcHJvZ3Jlc3NFbC5zdHlsZS5iYWNrZ3JvdW5kID0gYGNvbmljLWdyYWRpZW50KCNGRjY0NjQgJHtwcm9ncmVzc1ZhbHVlU3RhcnQgKiAzLjZ9ZGVnLCAjZmZmIDBkZWcpYDtcbiAgICAgIGlmIChwcm9ncmVzc1ZhbHVlU3RhcnQgPT09IHByb2dyZXNzVmFsdWVFbmQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwcm9ncmVzcyk7XG4gICAgICB9XG4gICAgfSwgc3BlZWQpO1xuICB9KTtcbn07XG5zdGFydENpcmNsZXMoKTtcblxuXG5cblxuIl0sImZpbGUiOiJtYWluLmpzIn0=
