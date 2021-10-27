var resources = i18next.createInstance(
  {
    lng: "es",
    debug: true,
    fallBackLng: "es",
  },
  function (err, t) {}
);

resources.addResourceBundle("es", "nsAccesoCitasMedicas", {
  total: "el Total es",
  Form: {
    Header: {
      Title: "Citas Médicas",
    },
    UrlBuscarCitas:
      "/transacciones/servicios-médicos/resultados-consulta-citas-medicas",
    General: {
      ErrorSistema: "Error en el sistema",
      MensajeError:
        "Se ha presentado un error en el sistema, por favor intenta mas tarde",
      MensajeNoCertificado:
        "No se logró generar el certificado, la empresa no registra aportes para el periodo especificado.",
      NotFoundTitle: "No se logró generar el certificado",
      IconoInformativo: "fa fa-info-circle",
      ColorIconoInformativo: "blue",
      UrlReporte:
        "https://www.compensar.com/formatos/opiniones-y-sugerencias.aspx",
      UrlReporteNuevaVentana: true,
    },
    UserNotAccess:
      "Señor usuario, el afiliado (aquiNombre) por su estado de vinculación no puede consultar citas médicas por este medio, por favor comuníquese al 4441234",
    Modal: {
      Title: "Incumplimiento Económico",
      TitleModalCancelarReagendar: "Cancelar Reagendar Cita",
      MensajeModalCancelarReagendar:
        "¿Desea salir del proceso de reagendar cita médica?",
      Message:
        "Señor usuario, usted presenta incumplimiento  económico. Si desea levantar este incumplimiento,  por favor  diríjase a una sede de atención de Compensar EPS.",
    },
    Table: {
      Dra: "Dr(a). ",
      Date: "Fecha",
      Specialist: "Especialista",
      User: "Usuario",
      Places: "Sede",
      Status: "Estado",
      Detail: "Detalle",
      CantRowNextAppoiment: 3,
    },
    UrlRedirect: {
      UrlSendBreach:
        "/salud/transacciones/servicios-médicos/levantar-incumplimiento",
      UrlMedical: "/citas-medicas",
    },
    buttons: {
      BtnPlaces: "Ver Sedes",
      BtnIsEconomic: "Incumplimiento económico",
      BtnSendBreach: "Levantar incumplimiento",
      Choose: "Seleccioner usuario",
    },
    ProxCita: {
      NombreColumnas: {},
      Celda: {
        NumAutorizacion: "Número de Autorización: ",
      },
      Mensajes: {},
      btns: {
        Descargar: "Descargar",
        Copago: "Pagar Copago",
        MostrarCopago: false,
        MostrarDescargar: true,
      },
      componenteReagendarFecha: {
        titulo: "¿ Cuando quiere la cita?",
        Btns: {
          proximaCita: "La más próxima",
          Cancelar: "Cancelar",
          BuscarCita: "Buscar Cita",
        },
      },
    },
    UrlCopago: "https://corporativo.compensar.com/",
    UrlCopagoMismaVentana: true,
  },
});
