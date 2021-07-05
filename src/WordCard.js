import React from ("react");
export default function WordCard(props) {
    return(
        <div>
            {Array.from(props.value).map((c,i)=> <CharacterCarderCard value={c} key={i}/>)}
        </div>
    )
}