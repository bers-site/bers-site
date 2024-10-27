function createObserver(entrySquare) {
    var square = document.querySelector('.container-wrapper');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('rectangle-animation');
          return;
        }
  
        entrySquare.classList.remove('rectangle-animation');
      });
    });
  
    observer.observe(square);
  };

var recs = document.getElementsByClassName('rectangle-2')
for(var rec of recs) {
    createObserver(rec)
}

document.querySelector('.circle').innerHTML = "ОСУШИМ ОСУШИМ  ОСУШИМ ОСУШИМ".split('')
  .map((e,i) => `<span style="--rot:${i*12}deg">${e}</span>`).join('');
