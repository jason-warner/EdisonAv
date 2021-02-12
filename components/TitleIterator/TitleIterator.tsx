import { useEffect, useState, useRef } from "react";
import styles from '../../styles/components/SplashPage/SplashPage.module.css';


const TitleIterator = () => {

    const
        [charCount, setCharCount] = useState([]),
        [killCount, setKillCount] = useState([]),
        [killSwitch, setKillSwitch] = useState(false),
        [charzarr, setCharzarr] = useState([]),
        charRef = useRef(null);

    //TITLE ITERATION START
    let
        charTitle: string[] = ["Edison Av"],
        charSpeed: number = 10,
        charStart: number = 0,
        charEnd: number[] = [],
        charStarter: string = "",
        charLoop = null;

    charTitle = charTitle[0].split("");
    useEffect(() => {
        charTitle.map((char, index) => {
            //create the array to hold the title's ending char codes
            charEnd.push(char.charCodeAt(0));
            //create unique counter starting points for each char in title
            charStart = charStart + index;
            charCount[index] = charStart;
            setCharCount(prevArr => [...prevArr, charCount]);
            //only one character can be in the charzarr array
            charStarter = String.fromCharCode(charCount[index]);
            charzarr[index] = charStarter;
        });
        console.log(charCount);
        console.log(charEnd);
        if (killSwitch) {
            console.log(killSwitch);
            console.log(killCount[0])
            console.log("KILLSWITCHED");
            return clearInterval(charLoop);
        } else if (!killSwitch) {
            // killCount[0] = 0;

            charLoop = setInterval(() => {
                return addChar();
            }, charSpeed);
        }
    }, [killSwitch])


    const addChar = () => {
        charEnd.map((charCode, index) => {
            // console.log('ZERO');
            // console.log(killCount);
            // console.log(index);
            if (charCount[index] >= (charCode + 1)) {
                // console.log('TWO');
                // console.log(killCount);
                // console.log(index);
                if (killCount[index] >= ((charTitle.length + 1))) {
                    // console.log('FOUR');
                    // console.log((killCount[0]));
                    // console.log(index);
                    //kill all once killcount is equal to length of title
                    return setKillSwitch(true);
                } else {
                    // console.log('THREE');
                    // console.log((killCount[0]));
                    // console.log(index);
                    //increment the kill counter until each char is solved
                    (killCount[0])++;
                    return setKillCount(prevArr => [...prevArr, (prevArr[0]++)])
                    // return setKillCount(killCount[0]++);
                }
            } else {
                // console.log('ONE');
                // console.log(killCount);
                // console.log(index);
                //assign the iterated num as charcode
                let char: string = String.fromCharCode(charCount[index]);
                //increment current index of counter arr
                let temp: number = (charCount[index]++);
                setCharCount(prevArr => [...prevArr, temp]);
                //replace the index of dom arr with iterated char
                return charzarr[index] = char;
                // setCharzarr(prevArr => [...prevArr, charzarr]);
            }
        })
    }
    //TITLE ITERATION END

    // const createMarkup = () => {
    //   return { __html: charzarr.join("") };
    // }

    return (


        <div ref={charRef} className={styles.charzarr}>
          {
            charzarr.map((char, zar) => {
              return (
                <span className={styles.splashTitle} key={zar}>
                  {char}
                </span>
              );
            })
          }
          {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
        </div>

    )

}

export { TitleIterator }