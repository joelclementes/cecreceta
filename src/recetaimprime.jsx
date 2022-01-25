import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export function BotonImprimeReceta({refs}){
    const oReceta = refs;

    const CreaReceta = (e) => {
        e.preventDefault();

        if (oReceta.txtNombre.current.value==="") return;

        const receta = {
            nombre: oReceta.txtNombre.current.value,
            ta:oReceta.txtTa.current.value,
            fc:oReceta.txtFc.current.value,
            temp:oReceta.txtTemp.current.value,
            peso:oReceta.txtPeso.current.value,
            talla:oReceta.txtTalla.current.value,
            imc:oReceta.txtImc.current.value,
            dx:oReceta.txtDx.current.value,
            rp:oReceta.txtRp.current.value
        };
        

    }

    // // Create styles
    // const styles = StyleSheet.create({
    //     page: {
    //     flexDirection: 'row',
    //     backgroundColor: '#E4E4E4'
    //     },
    //     section: {
    //     margin: 10,
    //     padding: 10,
    //     flexGrow: 1
    //     }
    // });
    
    // // Create Document Component
    // const MyDocument = () => (
    //     <Document>
    //     <Page size="A4" style={styles.page}>
    //         <View style={styles.section}>
    //         <Text>Section #1</Text>
    //         </View>
    //         <View style={styles.section}>
    //         <Text>Section #2</Text>
    //         </View>
    //     </Page>
    //     </Document>
    // );

    return(
        <div className="row">
        <div className="mt-2">
            <button onClick={CreaReceta} type="submit" className="btn btn-success" id="btnImprimirReceta">Imprimir</button>
        </div>
    </div>
    );
}
