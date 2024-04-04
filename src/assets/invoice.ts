export const htmlFile = `
<div id="dvContainer">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta
    name="SKYPE_TOOLBAR"
    content="SKYPE_TOOLBAR_PARSER_COMPATIBLE"
  /><title>Factura - iSiigo</title
  ><style type="text/css">
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
    }
    html {
      -webkit-print-color-adjust: exact;
    }
    /**
          * 12.309.872 - iSiigo. Ajustar el uso de estilos en las plantillas de facturacion ERP
          * Se crean una serie de clases de estilos en las plantillas, con el fin de eliminar los estilos que se inyectan desde el código.
          */
    .TableDocumentDetail {
      border-spacing: 0;
      padding: 0;
      width: 100%;
      color: #000;
      border: 1px solid #ccc;
      font-size: 12px;
    }

    .TableDocumentDetail tr:nth-child(even) {
      background-color: whitesmoke;
      font-size: 12px;
    }

    .TableDocumentDetail thead th {
      /*ItemHeader*/
      font-weight: bold;
      text-align: center;
      /*padItem*/
      padding: 5px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      background-color: #e3e3e3;
      font-size: 12px;
    }

    /*Aplica a todas las celdas, excepto la ultima*/
    .TableDocumentDetail tbody tr td {
      /*padItem*/
      padding: 2px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      font-size: 12px;
    }

    /*Aplica para la ultima celda*/
    .TableDocumentDetail tbody tr td:last-child {
      /*PadColumnFinal*/
      padding: 2px;
      border-bottom: 1px solid #ccc;
      border-right: none !important;
      font-size: 12px;
    }

    /*Aplica para la ultima celda de la ultima fila*/
    .TableDocumentDetail tbody tr:last-child td:last-child {
      /*Pad*/
      padding: 2px;
      font-size: 12px;
    }

    /*Aplica para la ultima fila*/
    .TableDocumentDetail tbody tr:last-child {
      /*PadItemFinal*/
      padding: 5px;
      border-right: 1px solid #ccc;
      border-bottom: none !important;
      font-size: 12px;
    }

    /*Aplica para la ultima fila, elimina el border inferior*/
    .TableDocumentDetail tbody tr:last-child td {
      border-bottom: none !important;
      font-size: 12px;
    }

    /*El operador >, (mayor que) que obtiene el hijo directo, al crear el archivo codifica lo cual no lo toma el estilo.*/
    .TableDocumentDetail tbody td tr:last-child,
    .TableDocumentDetail tbody td table td,
    .TableDocumentDetail tbody td tr:last-child td:last-child {
      padding: 1px !important;
      border-right: none !important;
      border-bottom: none !important;
      font-size: 12px;
    }

    @charset "UTF-8";
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
    }

    .invoice-container {
      padding: 0px !important;
      margin: 0px auto !important;
      position: static !important;
      -webkit-box-shadow: none !important;
      z-index: 0;
      height: 100%;
      margin-right: auto;
      margin-left: auto;
    }

    .container-invoice {
      width: 960px;
      margin: 0 0;
    }

    .rounded-container {
      -o-border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      position: relative;
      margin-bottom: 20px;
    }

    .UserDetails {
      margin-top: 20px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #000;
      font-weight: normal;
      float: left;
      text-align: center;
    }

    .CustomerDetails {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #000;
      font-weight: normal;
      float: right;
      text-align: center;
      margin-right: 0px;
      margin-top: 10px;
      width: 304px;
    }

    .CustomerDetails3 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #000;
      font-weight: normal;
      float: left;
      text-align: left;
      width: 597px;
      border: 1px solid #ccc;
    }

    .CustomerDetails4 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #000;
      font-weight: normal;
      float: right;
      text-align: center;
      width: 304px;
      border: 1px solid #ccc;
      padding: 0px;
    }

    .ItemHeader {
      background-color: #e3e3e3;
      font-weight: bold;
      font-size: 12px;
    }

    .ItemHeader2 {
      background-color: #e3e3e3;
      font-weight: bold;
      text-align: center;
    }

    .TableITemA {
      border-right: 1px solid #ccc;
    }

    .TableITemB {
      border-bottom: 1px solid #ccc;
    }

    .TableITemC {
      border-left: 1px solid #ccc;
    }

    .TableITemD {
      border-top: 1px solid #ccc;
    }

    .TableDetails {
      color: #000;
      border: 1px solid #ccc;
    }

    .Pad {
      padding: 3px;
    }

    .Pad1 {
      padding: 1px;
    }

    .Pad3 {
      padding: 3px;
    }

    .Pad5 {
      padding: 15px;
      padding-bottom: 0px;
    }

    .Pad6 {
      padding: 15px;
      padding-top: 0px;
      font-size: 14px;
      font-weight: bolder;
    }

    .Pad7 {
      padding: 10px;
      padding-top: 0px;
    }

    .Padtop {
      padding-top: 10px;
      padding-bottom: 14px;
    }

    .Padtb {
      padding-top: 3px;
      padding-bottom: 3px;
    }

    .Container {
      margin-right: 0px;
      margin-left: 0px;
      margin-bottom: 5px;
      margin-top: 5px;
      min-height: 180px;
    }

    .Total {
      margin-right: 0px;
      margin-left: 0px;
      margin-bottom: 2px;
      margin-top: 3px;
      min-height: 80px;
    }

    .invcomments {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12pt;
      color: #000;
      padding: 80px 20px 21px;
      text-align: left;
    }

    .invfooter {
      background-color: #e3e3e3;
      padding-left: 2px;
      padding-right: 2px;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-bottom: 0px;
    }

    .invfooter .text {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 7pt;
      color: #333;
      text-align: center;
      padding: 2px;
    }

    .padItem {
      padding: 5px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }

    .PadItemFinal {
      padding: 5px;
      border-right: 1px solid #ccc;
    }

    .PadColumnFinal {
      padding: 5px;
      border-bottom: 1px solid #ccc;
    }

    .Numeric {
      text-align: right;
      font-size: 12px;
    }

    .Alphanumeric {
      font-size: 12px;
    }

    .AlternateItemAlphaNumeric {
      background-color: whitesmoke;
    }

    .mainColumn {
      width: 170px;
      text-align: center;
    }

    .invoice-box {
      width: 100%;
      height: 100%;
    }

    .invoice-container-left {
      width: 99%;
      height: inherit;
      display: table-cell;
    }

    .invoice-container-right {
      width: 1%;
      height: inherit;
      vertical-align: middle;
      display: table-cell;
    }

    /*Mostrar alto fijo*/
    .dvERPDocumentItems {
      border: 1px #cccccc solid;
      min-height: 90px;
    }

    .Total {
      position: relative;
      min-height: 100px;
    }

    .TotalContent {
      top: 0;
      left: 0;
      width: 100%;
    }

    .bodyClass {
      padding-top: 0px;
      margin-top: 2px;
    }
  </style>
  <div class="invoice-container rounded-container">
    <div class="invoice-box">
      <div class="invoice-container-left">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td valign="top" width="52px">
                <div>
                  <img
                    src="https://monolithqa.siigo.com//QAAllienzPremium006//Img//invoceERP_ribbon_Paid.png"
                    width="52"
                    height="91"
                  />
                </div>
              </td>
              <td>
                <strong
                  ><div class="UserLogo">
                    <img
                      style="
                        max-height: 92px;
                        max-width: 100%;
                        margin-top: 15px;
                      "
                      src="{LogoToReplace}"
                    /></div
                ></strong>
              </td>
              <td>
                <strong
                  ><div class="UserDetails" style="margin-bottom: 5px;">
                    <span style="color: #000; font-size: 12px;"
                      ><span style="font-weight: bold; font-size: 12px;"
                        >QAAllienzPremium006RS</span
                      ><br />
                      NIT 8.940.982-2<br />Carrera 4C calle 24b 46<br />
                      Tel: (3185803518) 3185803514<br />Bogotá - Colombia<br />AdminAllienz07@yopmail.com<br
                    /></span></div
                ></strong>
              </td>
              <td><div></div></td>
              <td width="280px">
                <div class="CustomerDetails">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                    class="TableDetails"
                  >
                    <tbody>
                      <tr>
                        <td
                          width="100%"
                          class="Pad5"
                          style="text-align: center; font-size: 16px;"
                        >
                          Factura
                        </td>
                      </tr>
                      <tr>
                        <td
                          width="100%"
                          class="Pad6"
                          style="
                            text-align: center;
                            font-size: 14px;
                            font-weight: bold;
                          "
                        >
                          No. 50377
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="margin-left: 10px;"
        >
          <tbody>
            <tr>
              <td>
                <div class="CustomerDetails3" style="margin-right: 45px;">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="ItemHeader Pad3"
                          width="20%"
                          style="
                            color: #000;
                            font-size: 12px;
                            text-align: left;
                          "
                        >
                          Señores
                        </td>
                        <td
                          class="Pad3 TableITemB"
                          width="30%"
                          colspan="3"
                          style="color: #000; font-size: 12px;"
                        >
                          Jose Torres 2
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ItemHeader Pad3"
                          style="
                            color: #000;
                            font-size: 12px;
                            text-align: left;
                          "
                        >
                          NIT
                        </td>
                        <td
                          class="Pad3 TableITemB"
                          style="color: #000; font-size: 12px;"
                        >
                          1.010.244.322-1
                        </td>
                        <td
                          class="ItemHeader Pad3"
                          style="
                            color: #000;
                            font-size: 12px;
                            text-align: left;
                          "
                        >
                          Teléfono
                        </td>
                        <td
                          class="Pad3 TableITemB"
                          width="30%"
                          style="color: #000; font-size: 12px;"
                        >
                          (602) 0000000 - Ext. 000
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="ItemHeader Pad3"
                          style="
                            color: #000;
                            font-size: 12px;
                            text-align: left;
                          "
                        >
                          Dirección
                        </td>
                        <td class="Pad3" style="color: #000; font-size: 12px;">
                          No aplica
                        </td>
                        <td
                          class="ItemHeader Pad3"
                          style="
                            color: #000;
                            font-size: 12px;
                            text-align: left;
                          "
                        >
                          Ciudad
                        </td>
                        <td class="Pad3" style="color: #000; font-size: 12px;">
                          Popayán - Colombia
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td>
                <div class="CustomerDetails4" style="margin-right: 10px;">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="visibility: collapse; display: none;"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="Pad TableITemA TableITemB ItemHeader"
                          width="33%"
                          style="text-align: center; font-size: 12px;"
                          colspan="2"
                        >
                          Fecha y hora Factura
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="Pad TableITemA TableITemB ItemHeader"
                          width="33%"
                          style="
                            text-align: center;
                            font-size: 12px;
                            border-bottom: 1px solid #fff;
                          "
                        >
                          Generación
                        </td>
                        <td
                          class="Pad TableITemA"
                          style="text-align: center; font-size: 12px;"
                        >
                          <span
                            style="
                              text-align: center;
                              color: #000;
                              font-size: 12px;
                            "
                          >
                            [strGenerationLongDate]
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="Pad TableITemA TableITemB ItemHeader"
                          width="33%"
                          style="
                            text-align: center;
                            font-size: 12px;
                            border-bottom: 1px solid #fff;
                          "
                        >
                          Expedición
                        </td>
                        <td
                          class="Pad TableITemA"
                          style="text-align: center; font-size: 12px;"
                        >
                          <span
                            style="
                              text-align: center;
                              color: #000;
                              font-size: 12px;
                            "
                          >
                            [strExpeditionLongDate]
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="Pad TableITemA TableITemB ItemHeader"
                          width="33%"
                          style="
                            text-align: center;
                            font-size: 10px;
                            border-bottom: 1px solid #fff;
                          "
                        >
                          Vencimiento
                        </td>
                        <td
                          class="Pad TableITemA"
                          style="text-align: center; font-size: 12px;"
                        >
                          <span
                            style="
                              text-align: center;
                              color: #000;
                              font-size: 12px;
                            "
                          >
                            [strMaxDueLongDate]
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="visibility: visible;"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="Pad TableITemA TableITemB ItemHeader"
                          width="33%"
                          style="text-align: center; font-size: 12px;"
                        >
                          Fecha de Factura
                        </td>
                        <td
                          class="Pad TableITemB ItemHeader"
                          width="33%"
                          style="text-align: center; font-size: 12px;"
                        >
                          Fecha de Vencimiento
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="Pad TableITemA Padtop"
                          style="text-align: center; font-size: 12px;"
                        >
                          <span
                            style="
                              text-align: center;
                              color: #000;
                              font-size: 12px;
                            "
                            >2024-02-26</span
                          >
                        </td>
                        <td
                          class="Pad Padtop"
                          style="text-align: center; font-size: 12px;"
                        >
                          <span
                            style="
                              text-align: center;
                              color: #000;
                              font-size: 12px;
                            "
                            >--</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="padding: 7px;"
        >
          <tbody>
            <tr align="right">
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="Container" style="margin-left: 10px;">
          <div class="dvERPDocumentItems">
            <table class="TableDocumentDetail">
              <thead>
                <tr>
                  <th>
                    Ítem
                  </th>
                  <th>
                    <div>Descripción</div>
                  </th>
                  <th>
                    Cantidad
                  </th>
                  <th>
                    Vr. Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="10" style="text-align: center;">
                    1
                  </td>
                  <td class="Alphanumeric" width="40%" title="">
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      style="width: 100%; table-layout: fixed; border: 0;"
                    >
                      <tbody>
                        <tr>
                          <td style="word-wrap: break-word;">01-prodExcel</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td class="Numeric" width="36px" title="">
                    1.00
                  </td>
                  <td class="Numeric" width="64px" title="">
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td></td>
                          <td
                            align="right"
                            width="99%"
                            style="word-wrap: normal; white-space: nowrap;"
                          >
                            6,545.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="Total">
            <div class="TotalContent">
              <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="44%" rowspan="4" style="vertical-align: top;">
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td style="text-align: left; font-size: 12px;">
                              <table
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Total items: </strong> 1
                                      <br /><br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Valor en Letras: </strong> Seis
                                      mil quinientos cuarenta y cinco pesos
                                      m/cte <br /><br />
                                    </td>
                                  </tr>
                                  <tr></tr>
                                  <tr>
                                    <td>
                                      <strong>Condiciones de Pago: </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-left: 10px;">
                                      <table style="width: 90%;">
                                        <tbody>
                                          <tr>
                                            <td>Efectivo</td>
                                            <td style="width: 10px;">$</td>
                                            <td
                                              style="
                                                text-align: right;
                                                width: 120px;
                                              "
                                            >
                                              6,545.00
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>

                                      <br /><br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="word-break: break-word;">
                                      <strong>Observaciones: </strong>prueba
                                      observación por defecto ....<br /><br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="visibility: collapse; display: none;"
                                  >
                                    <td>
                                      <strong
                                        >Porcentaje de participación de los
                                        miembros: </strong
                                      ><br /><br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="visibility: collapse; display: none;"
                                  >
                                    <td>
                                      [ShareholderParty]
                                      <br /><br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="visibility: collapse; display: none;"
                                  >
                                    <td>
                                      <strong>Orden de compra: </strong>
                                      [strOrderReferencePrefix] -
                                      [strOrderReferenceNumber] <br /><br />
                                    </td>
                                  </tr>
                                  <tr
                                    style="visibility: collapse; display: none;"
                                  >
                                    <td>
                                      <strong>Orden de entrega: </strong>
                                      [strOrderDeliveryPrefix] -
                                      [strOrderDeliveryNumber]
                                      <strong style="padding-left: 10px;"
                                        >Fecha:
                                      </strong>
                                      [strOrderDeliveryDate]
                                      <br /><br />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width="21%" valign="top">
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td
                              width="50%"
                              class="Pad TableITemA TableITemB TableITemD TableITemC"
                              style="font-size: 12px; font-weight: bold;"
                            >
                              Total Bruto
                            </td>
                            <td
                              width="50%"
                              class="Pad TableITemA TableITemB TableITemD"
                              style="text-align: right; font-size: 12px;"
                            >
                              <table width="100%">
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td
                                      align="right"
                                      width="99%"
                                      style="
                                        word-wrap: normal;
                                        white-space: nowrap;
                                      "
                                    >
                                      5,500.00
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td
                              class="Pad TableITemA TableITemB TableITemC"
                              style="font-size: 12px;"
                            >
                              IVA 19%
                            </td>
                            <td
                              class="Pad TableITemA TableITemB"
                              style="text-align: right; font-size: 12px;"
                            >
                              <table width="100%">
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td
                                      align="right"
                                      width="99%"
                                      style="
                                        word-wrap: normal;
                                        white-space: nowrap;
                                      "
                                    >
                                      1,045.00
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td
                              class="Pad ItemHeader TableITemA TableITemB TableITemC"
                              style="font-size: 12px;"
                            >
                              Total a Pagar
                            </td>
                            <td
                              class="Pad ItemHeader TableITemA TableITemB"
                              style="text-align: right; font-size: 12px;"
                            >
                              <table width="100%">
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td
                                      align="right"
                                      width="99%"
                                      style="
                                        word-wrap: normal;
                                        white-space: nowrap;
                                      "
                                    >
                                      6,545.00
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="invfooter" style="margin-left: 10px;">
          <div class="text" style="font-size: 11px;">
            A esta factura de venta aplican las normas relativas a la letra de
            cambio (artículo 5 Ley 1231 de 2008). Con esta el Comprador declara
            haber recibido real y materialmente las mercancías o prestación de
            servicios descritos en este título - Valor.

            <strong
              >Número Autorización aprobado en prefijo desde el número al
              Vigencia: 6 Meses</strong
            ><br />Empresa del Estado - Actividad Económica
            7810&nbsp;Actividades de agencias de gestión y colocación empleo
            Tarifa <br />

            <br />
          </div>
        </div>
      </div>
      <div class="invoice-container-right">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          height="100%"
        >
          <tbody>
            <tr>
              <td>
                <img
                  src="https://monolithqa.siigo.com//QAAllienzPremium006//Img//ElaboradoSiigo.png"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`
