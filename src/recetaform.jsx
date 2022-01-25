import React, { useRef } from 'react';
import {BotonImprimeReceta} from './recetaimprime'

export function Receta() {

    const txtNombre = useRef();
    const txtTa = useRef();
    const txtFc = useRef();
    const txtTemp = useRef();
    const txtPeso = useRef();
    const txtTalla = useRef();
    const txtImc = useRef();
    const txtDx = useRef();
    const txtRp = useRef();

    const refs = {
        txtNombre:txtNombre,
        txtTa:txtTa,
        txtFc:txtFc,
        txtTemp:txtTemp,
        txtPeso:txtPeso,
        txtTalla:txtTalla,
        txtImc:txtImc,
        txtDx:txtDx,
        txtRp:txtRp
    }

    const calculaimc = () =>{
        let peso = txtPeso.current.value;
        let altura = txtTalla.current.value;
        let alturaMetro, alturaAlCuadrado, div, imc = 0.00;
        if (peso != "" && altura != "") {
            alturaMetro = altura / 100;
            alturaAlCuadrado = Math.pow(alturaMetro, 2);
            div = peso / alturaAlCuadrado;
            imc = ((div * 100) / 100).toFixed(2);
            txtImc.current.value = imc;
        } else {
            txtImc.current.value = "";
        }
    }

    return (
        <div className="container">
            <form >
                <div className="row">
                    <div className="col col-12 col-md-6">
                        <div className="mb-2">
                            <label htmlFor="nombre" className="form-label">Nombre:</label>
                            <input type="text" ref={txtNombre} className="form-control" id="nombre" placeholder="Nombre completo" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="ta" className="form-label">T.A:</label>
                            <input type="text" ref={txtTa} className="form-control" id="ta" placeholder="opcional" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="fc" className="form-label">F.C:</label>
                            <input type="text" ref={txtFc} className="form-control" id="fc" placeholder="opcional" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="temp" className="form-label">Temp:</label>
                            <input type="text" ref={txtTemp} className="form-control" id="temp" placeholder="opcional" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="peso" className="form-label">Peso (kg):</label>
                            <input type="number" ref={txtPeso} onChange={calculaimc} className="form-control" id="peso" placeholder="opcional" />
                        </div>
                    </div>
                    <div className="col col-12 col-md-6">
                        <div className="mb-2">
                            <label htmlFor="talla" className="form-label">Talla (cm):</label>
                            <input type="number" ref={txtTalla} onChange={calculaimc} className="form-control" id="talla" placeholder="opcional" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="imc" className="form-label">IMC:</label>
                            <input type="text" ref={txtImc} className="form-control" id="imc" placeholder="" readOnly />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="dx" className="form-label">Dx:</label>
                            <textarea type="textarea" ref={txtDx} className="form-control wyswyg" id="dx"></textarea>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="Rp" className="form-label">Rp:</label>
                            <textarea type="textarea" ref={txtRp} className="form-control wyswyg" id="Rp"></textarea>
                        </div>
                    </div>
                </div>
                <BotonImprimeReceta refs={refs}/>

            </form>
        </div >
    )

}