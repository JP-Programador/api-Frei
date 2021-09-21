import styled from 'styled-components'


const ContainerCarrinho = styled.div`
.tiras {
    display: flex;
    flex-direction: row;

    
}

.box-tabela {
  margin: 2em 0em 0em 10em;
}

thead {
    background-color: #6CC3DF;

    width: 100vw;

}

th {
    height: 61.93px;
    text-align: left;
    padding: .1em 5.2em;
    color: #ffff;
    font-weight: 800;
} 
td {
    text-align: center;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

.cupom {
    margin-top: 2em ;
    display: flex;
    flex-direction: row;
    border: 3px solid #201E1E;
    padding: .50em;
    width: 78%;
    margin-left: 10em;
    box-shadow: 1px 3px 5px grey;  

}
.cupom > div {
    margin-left: 1em;
    text-align: center;

}

.cupom > button:hover {
color: white;
cursor: pointer;
text-decoration: none;
outline: none;

}

.est-box {
    position: relative;
    left: 5em;
    top: .45em;
    display: flex;
    flex-direction: row;
}

.est-box > input {
    margin: 0px 8px;
    text-align: center;
}

.lixeira {
    position: relative;
    top: 20px;
    left: 60px;
}
input {
    outline: none;
    border: 1px solid black;
    padding: 5px;
}

.precos {
display: flex;
flex-direction: column;
margin: 5em 0em 0em 60em;
}

.precos > div {
    display: flex;
    flex-direction: row;
}

.box-preco > div {
    margin-left: 45px;
    margin-top: 10px;
}

.botoes {
    display: flex;
    justify-content: space-between;
    padding: 2em 7em 0px 10em;
}

.botoes > button {
    border: 5px solid #1AABF3;
    background-color: #1AABF3;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

`
export { ContainerCarrinho }