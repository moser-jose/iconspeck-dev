import React, { useState, useEffect } from 'react'
import './assets/page.scss'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {useSpeckContext} from './contexts/SpeckContext'
import logo from './assets/logo.svg'
import Loading from './Loading'

const App = () => {
    const {icons, metadata} = useSpeckContext(); 
    const [filter, setFilter]=useState([]);
    const [fild, setFild]=useState('');
    const [themeButton, setThemeButton] = useState(false);
    const [copiado, setCopiado]=useState(false);

    const handleFilter = ({ target }) => {
        setFild(target.value);
        if (target.value == "") {
            setFilter([]);
        }
        else {
            const fil=icons.filter((e)=>{
                return e.properties.name.toLowerCase().includes(target.value.toLowerCase())
            })
            setFilter(fil);
        }
    }
    const limpar=()=>{
        const s = document.querySelector('#search');
        s.value = "";
        s.focus();
        setFilter([]);
        setFild('');
    }
    function jscopyB ({ target, currentTarget }) {
        
        if (target !== currentTarget)
            {
                var txt =  currentTarget.getAttribute("ic");
                navigator.clipboard.writeText(txt)
                setCopiado(true) 
            }
            else
                var txt =  target.getAttribute("ic");
                navigator.clipboard.writeText(txt)
                setCopiado(true)
         }
        
       
      
    
    const handleClick = () => {
        setThemeButton(!themeButton)
        if (!themeButton) {
            document.querySelector('body').classList.add('dark');
            localStorage.setItem("theme", "dark");
        }
        else {
            document.querySelector('body').classList.remove('dark');
            localStorage.removeItem("theme");
        }
    }
    function onCopiar() {
        /* Get the text field */
        var copyText = document.getElementById("copy");
      
        /* Select the text field */
       /*  copyText.select();
        copyText.setSelectionRange(0, 99999); */ /* For mobile devices */
      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.innerText);
        
        /* Alert the copied text */
        alert("Copied the text: " + copyText.innerText);
      }





    useEffect(() => {
        
        const theme = localStorage.getItem("theme");
        if (theme) {
            document.querySelector('body').classList.add('dark');
            setThemeButton(true)
        }
        else
            document.querySelector('body').classList.remove('dark');
            if(copiado === true){
                setTimeout(() => {
                    setCopiado(false)
                }, 2000);
            }
    }, [copiado])


    return (
        
        <div className="page">
           {copiado === true &&  
                <div class="alerta" >
                    <p class="alerta_mensagem">Ícone copiado para área de transferência</p>
                </div>
            }
            <div className="header">
            <div className="theme">
                <div onClick={handleClick}>
                    <div className="label">
                        <FontAwesomeIcon icon="sun" />
                        <FontAwesomeIcon icon="moon" />
                        <div className={themeButton === true ? "ball ball-dark" : "ball"}></div>
                    </div>
                </div>
            </div>
            </div>
                <div className="corpo">
                <div className="header-second">
                <img className="img" src={logo}/>
                    <div className="header-third">
                    
                        <h1 className="titulo" >
                            {metadata.fontFamily}
                        </h1>
                    <span className="versao">{metadata.versionIcons}</span>
                    </div>
                    <p>
                        
                        <span className="iconsp">{metadata.fontFamily}</span> {metadata.description} 😅
                    </p>
                <div className="redes">
                    <a title="github" target="_blank" href="https://www.github.com/moser-jose/iconspeck" className="iconspeck speck-github"></a>
                    <a title="npm" target="_blank" href="https://www.npmjs.com/package/iconspeck" className="iconspeck speck-npm-sp"></a>
                    <a title="jsdelivr" target="_blank" href="https://www.jsdelivr.com/package/npm/iconspeck?version=1.1.7" className="iconspeck speck-jsdelivr"></a>
                    <a title="unpkg" target="_blank" href="https://unpkg.com/browse/iconspeck@1.1.7/" className="iconspeck speck-unpkg"></a>
                
                </div>
                <a title="Github" target="_blank" href="https://www.github.com/moser-jose" className="by"><span>by</span> {metadata.designer}</a>
                </div>
                <div className="search">
                        <form>
                            <div className="input">
                                <FontAwesomeIcon size="lg" icon="search"  />
                                <input type="text" id="search"  onChange={handleFilter} placeholder="Pesquise pelo ícone, ex: react"/>
                                {
                                    fild !=='' && <span onClick={limpar} className="delete">+</span>

                                }
                                </div>
                           </form>

                           {
                               icons.length!==0 ?
                               <div className="icons">
                               {
                                   filter.length!==0 ?
                                   filter.map((e, key)=>{
                                       return <div key={key} className="icon">
                                           <span className={`iconspeck speck-${e.properties.name}`}></span>
                                           <span className="name" >
                                               {e.properties.name}
                                               {/* <span>Copiar</span> */}
                                           </span>
                                       </div>
                                   }).slice(0,80):
                                   icons.map((e, key)=>{
                                       return <div key={key} className="icon"  >
                                           <span className={`iconspeck speck-${e.properties.name}`}></span>
                                           <span className="name" id="icon">
                                               {e.properties.name}
                                           </span>
                                           <div onClick={jscopyB} title="copiar" ic={e.properties.name} className="copy">
                                                <FontAwesomeIcon ic={e.properties.name} size="lg" icon="clone" />
                                           </div>
                                       </div>
                                   }).slice(0,80)
                               }
                               </div>
                        :    <Loading/>    
                           }

                       
                    </div>
                </div>

            <div className="utilizacao">
                    <h1>Como utilizar o iconspeck 😱</h1>
                    <h2>1</h2> <p className="p">
                        O Iconspeck pode ser encontrado 👉 <span><a target="_blank" title="jsdelivr" href="https://cdn.jsdelivr.net/npm/iconspeck@1.1.7/css/iconspeck.min.css">aqui</a></span> ou <span><a target="_blank" title="unpkg" href="https://unpkg.com/iconspeck@1.1.7/css/iconspeck.min.css">aqui</a></span>.  
                       
                    </p>
                    <p className="forma">Forma de utilizar:</p>
                    <div className="code">
                    <code>{'<link href="https://cdn.jsdelivr.net/npm/iconspeck@1.1.7/css/iconspeck.min.css" rel="stylesheet"/>'} </code>
                    <span className="copiar">Copiar</span>
                    </div>
                    
                    <p className="forma">Ou</p>
                    <div className="code">
                        <code  id="copy">{'<link href="https://unpkg.com/iconspeck@1.1.7/css/iconspeck.min.css" rel="stylesheet">'} </code>
                        <span className="copiar" onClick={onCopiar}>Copiar</span>
                    </div>
                    <p className="forma">👉 Lembre-se sempre <span>class="iconspeck speck-nomeDoÍcone"</span></p>
                    

                    <ul>
                    <h2>2</h2>
                        <li>Faça o download do repositório no  <a title="github" target="_blank" href="https://www.github.com/moser-jose/iconspeck">github</a> ou através do <a title="NPM" target="_blank" href="https://www.npmjs.com/package/iconspeck">npm</a>;</li>
                        <li>Copie o ficheiro <span>iconspeck.css</span> ou o <span>iconspeck.min.css</span> da pasta   <span>css</span> para o seu projecto;</li>
                        <li>Copie a pasta <span>fonts</span> para o seu projecto;</li>
                        <li>Certifique-se que o caminho da pasta <span>fonts</span> está correcto dentro do ficheiro <span>iconspeck.css</span>;</li>
                        <li>Use a tag link para linkar o arquivo  <span>iconspeck.css</span> ou o <span>iconspeck.min.css</span> na sua página HTML;</li>
                        <li>Use as classes da seguinte maneira  <span>{'<i class="iconspeck speck-yarn"></i>'}</span> ou <span>{'<span class="iconspeck speck-webpack"></span>'}</span>.</li>
                     
                    </ul>
                    <p className="forma">👉 Lembre-se sempre <span>class="iconspeck speck-nomeDoÍcone"</span></p>
                </div>
            <div className="allv">
                    <h1>Versões do iconspeck 🙌</h1>
                    <h2>v1.1.7 <span>actual</span></h2>
                    <h3>Adicionado mais 34 novos ícones. 💎</h3>
                    <h2>v1.1.6</h2>
                    <h3>Adicionado mais 39 novos ícones. 💎</h3>
                    <h2>v1.1.5</h2>
                    <h3>Atualização do projeto e adicionado mais 5 novos ícones - express-sp, firebase-sp, graphql, spring. 💎</h3>
                    <h2>v1.1.4</h2>
                    <h3>Atualização do projeto e adicionado mais 5 novos ícones - eslint, prettier, visualg, portugol, django-alt. 💎</h3>
                    <h2>v1.1.2</h2>
                    <h3>Atualização do iconspeck.css e iconspeck.min.css. 🍏</h3>
                    <a className="link" target="_blank" href="https://github.com/moser-jose/iconspeck#readme">Saiba mais no Github ✌🏼</a>
                </div>
            
            <div className="github">
                <p>👨🏽‍💻 Aventure-se e contribua com o projecto no <a className="link" target="_blank" href="https://github.com/moser-jose/iconspeck">Github</a> ✌🏼</p>
            </div>

            <div className="header">OLA</div>
        </div>
    )
}
export default App;