import React, { CSSProperties } from "react"


interface highLightProps {
  sourceStr: string,
  keyArr: Array<Keyword>,
  className?: string,
  markBoxStyle?: CSSProperties,
  markItemStyle?: CSSProperties,
  markActiveStyle: CSSProperties
}

interface Keyword {
  word: string,
  link?: string
}

const HighLight: React.FC<highLightProps> = ({
  sourceStr,
  keyArr,
  className,
  markBoxStyle,
  markItemStyle,
  markActiveStyle
}) => {

  const markKeywords = () => {

    const regStr = keyArr.reduce((str, item, index) => {
      if (index === (keyArr.length - 1)) {
        return str += `(${item.word})`
      } else {
        return str += `(${item.word})|`
      }
    }, '');

    const reg = new RegExp(regStr);

    const strArr = sourceStr.split(reg);

    return strArr.map((item,index) => {
      if (item) {
        const targetIndex = keyArr.findIndex((keyword) => {
          return keyword.word === item
        })

        if (targetIndex !== -1) {
          const target = keyArr[targetIndex]
          if (target.link) {
            return <a style={markActiveStyle} key={`markKeyWords${index}`} href={target.link}>{item}</a>
          } else {
            return <span style={markActiveStyle} key={`markKeyWords${index}`}>{item}</span>
          }

        } else {
          return <span style={markItemStyle ? markItemStyle :{} } key={`markKeyWords${index}`}>{item}</span>
        }
      } else {
        return null
      }
    })
  }


  return <div style={markBoxStyle} className={className}>
    {markKeywords()}
  </div>
}

export default HighLight

