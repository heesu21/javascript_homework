function clickhandler(e) {
    const target = e.target;

    console.log(target);

    if(target.classList.contains('box')) {
        if(target.classList.contains('clicked')) {
            target.classList.remove('clicked')
        } else {
            target.classList.add('clicked')
        }
    }
};

const containerEl = document.getElementById("container");

containerEl.addEventListener('click', clickhandler)

function getSquare(number) {
    console.log(number*number);
  }
  
  const result = getSquare(5);
  console.log(result); // 25 출력 (5의 제곱)

