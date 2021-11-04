import styled from 'styled-components'

const ContainerCarrinho = styled.div`


.box-tabela {
  margin: 2em 9em 0em 2em;
}

 thead {
    background-color: black;
    font-family: Belleza; 
    width: 100vw;

}

th {
    height: 61.93px;
    text-align: center;
    padding: .1em 6.8em;
    color: #ffff;
    font-weight: 800;
} 


td {
    text-align: center;
    height:  61.93px;
    font-family: 'Noto Sans SC', sans-serif;
        padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

.cupom {
    margin-top: 2em ;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 3px solid #201E1E;
    padding: .50em;
    width: 94%;
    margin-left: 2em;
    box-shadow: 1px 3px 5px grey;  

}
.cupom > div {
    margin-left: 1em;
    text-align: center;

}

button:hover {
color: white;
cursor: pointer;
text-decoration: none;
outline: none;


}

.est-box {
    position: relative;
    left: 9em;
    top: .45em;
    display: flex;
    flex-direction: row;
}

.est-box > input {
    margin: 0px 8px;
    text-align: center;
}

.lixeira img {
    position: relative;
    top: 20px;
    left: 6.4em;
    height: 1.4em;

    cursor: pointer;
}

.h {
position: relative;
right: -24px;
}
input {
    outline: none;
    border: 1px solid black;
    padding: 5px;
}

.precos {
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 1.5em;
margin-top: 20px;
}

.precos > div {
    display: flex;
    flex-direction: row;
}

.box-preco > div {
    margin-top: 10px;
    margin-right: 8px;
}

.botoes {
    display: flex;
    justify-content: space-between;
    padding: 2em 2em 0px 2em;
}
button {
    border: 7px solid #1AABF3;
    background-color: #1AABF3;
    padding: 5px 17px;
    border-radius: 5px;
    cursor: pointer;
}

`
export { ContainerCarrinho }