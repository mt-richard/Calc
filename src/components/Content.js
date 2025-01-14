import { useState } from "react";

const Content = () => {


                
                const [result, setResult]=useState("0");
                const [input, setInput]=useState("");
                const myadd = (e) => {
                    setInput(input.concat(e.target.name));
                }
                    /* inp.value='Hello'; */
                const clean = () => {
                    setInput("");
                    setResult("0");
                }
                const backspace = () => {
                    setInput(input.slice(0, -1))
                }
                const squareroot = () => {
                    setResult(Math.sqrt(input).toString());
                }
                const squared = () => {
                    setResult(Math.pow(input, 2).toString());
                }
                const exponent = () => {
                    var name = prompt("Enter a number to be powered to " + input );
                    if (name === null || name === ""){
                      alert("No input entered");
                    }
                    console.log(name);
                    setResult(Math.pow(input, name).toString()); 
                }
                const oneover = () => {
                    setResult(eval(1 / input).toString());
                }
                const percentage = () => {
                    setResult(eval(input / 100).toString());
                }
                const calculate = () => {
                    try {
                        setResult(eval(input).toString());
                    } catch (error) {
                        setResult("Error");
                    }
                    
                }



    return ( 
        <div className="allcont w-100 flex  px-10 py-10  ">
            <div className="content  text-white">
                <span class="text-3xl head ">Calculator Web App</span>
                <p className="homepara">Calculator.net's sole focus is to provide fast, comprehensive, convenient, free online calculators in a plethora of areas. Currently, we have around 200 calculators to help you "do the math" quickly in areas such as finance, fitness, health, math, and others, and we are still developing more. Our goal is to become the one-stop, go-to site for people who need to make quick calculations. Additionally, we believe the internet should be a source of free information. Therefore, all of our tools and services are completely free, with no registration required.             </p>
                <button href="#calc" className="btn rounded py-1 px-5 bg-green-600">Get Started</button>
            </div>
            <div className="calc" id="calc">
            
                <div className="display">
                    <form action="" method="post">
                    <input type="text" id="input" name="input" value={input}/><br/>
                    <div className="answer text-green-600"> = {result} </div>
                    </form>
                </div>
            <div className="btns">
                <div className="upperbtn">
                    <button onClick={exponent} name="Exp" className="upbtn btnexp">x<sup>y</sup></button>
                    <button onClick={squareroot} name="sqrt" className="upbtn btnsqrt">√x</button>
                    <button onClick={backspace} name="clear" className="upbtn btnEx">C</button>
                    <button onClick={clean} name="clearall" className="btn btn-dangerous upbtn btnC">CL</button>
                    <button onClick={oneover} name="" className="upbtn  btnx">1/x</button>
                    <button onClick={squared} name="" className="upbtn btnxp">x<sup>2</sup></button>
                    <button onClick={myadd} name="/" className="upbtn btnbutton">/</button>
                    <button onClick={myadd} name="*" className="upbtn btnmult">*</button>
                </div>
                <div className="lowerbtn">
                    <button onClick={myadd} name="7" className="lowbtn btn7">7</button>
                    <button onClick={myadd} name="8" className="lowbtn btn8">8</button>
                    <button onClick={myadd} name="9" className="lowbtn btn9">9</button>
                    <button onClick={myadd} name="-" className="upbtn btnsub">-</button>
                    <button onClick={myadd} name="4" className="lowbtn btn4">4</button>
                    <button onClick={myadd} name="5" className="lowbtn btn5">5</button>
                    <button onClick={myadd} name="6" className="lowbtn btn6">6</button>
                    <button onClick={myadd} name="+" className="upbtn btnadd">+</button>
                    <button onClick={myadd} name="1" className="lowbtn btn1">1</button>
                    <button onClick={myadd} name="2" className="lowbtn btn2">2</button>
                    <button onClick={myadd} name="3" className="lowbtn btn3">3</button>
                    <button onClick={myadd} name="(" className="upbtn btn()">(</button>
                   {/*  <button onClick={myadd} name=")" className="upbtn btn()">)</button> */}
                    <button onClick={myadd} name="." className="lowbtn btndot">.</button>
                    <button onClick={myadd} name="0" className="lowbtn btn0">0</button>
                    <button onClick={percentage} name="%" className="lowbtn btnmod">%</button>
                    <button onClick={myadd} name=")" className="upbtn btn()">)</button>
                    <button onClick={myadd} name="Richard" className="ownner btn()">Owner</button>
                    <button onClick={calculate} name="equal" className="bg-green  btneq">=</button>
                </div>
            </div>
            </div>
            <script>
                
                
                
            </script>
        </div>
     );
}
 
export default Content;