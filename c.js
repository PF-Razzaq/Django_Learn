// 1
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matleftHandVergeCost = (
      obj.job.matleftHandVergeActReq *
      tilesData.filter((a) => a.tileId === obj.job.tileId)[0].leftHandedTileCost
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matleftHandVergeActReq]);
// 2
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matslateCost = (
      obj.job.matSlateActReq *
      tilesData.filter((a) => a.tileId === obj.job.tileId)[0].costPerTile
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matSlateActReq]);
// 3
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.mateaveFeltCost = (
      obj.job.mateaveFeltActReq *
      materialRates.filter((a) => a.materialName === "Eave Felt")[0].costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.mateaveFeltActReq]);
// 4
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.eaveCombFillerCost = (
      materialRates.filter((a) => a.materialName === "Eave Comb Filler")[0]
        .costPerUnit * formData.job.eaveCombFillerActReq
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.eaveCombFillerActReq]);
// 5
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matroofingMembraneCost = (
      obj.job.matroofingMembraneActReq *
      materialRates.filter((a) => a.materialName === "Roofing Membrane")[0]
        .costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matroofingMembraneActReq]);
// 6
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matbattenCost = (
      obj.job.matbattenActReq *
      materialRates.filter(
        (a) => a.materialName === "25 x 50mm Batten (big & slate)"
      )[0].costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matbattenActReq]);
// 7
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matbattenNailsCost = (
      obj.job.matbattenNailsActReq *
      materialRates.filter((a) => a.materialName === "Batten ils")[0]
        .costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matbattenNailsActReq]);
// 8
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matslateTileNailsCost = Number(
      nailsmm.filter((a) => a.nailSize == mmmValue.replace("mm", ""))[0]
        .costPerUnit * Number(obj.job.matslateTileNailsActReq)
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matslateTileNailsActReq]);
// 9
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matleadFlashingsCost = (
      materialRates.filter((a) => a.materialName === "Lead Flashings")[0]
        .costPerUnit * obj.job.matleadFlashingsActReq
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matleadFlashingsActReq]);
// 10
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matleadValleysCost = (
      materialRates.filter((a) => a.materialName === "Lead Valleys")[0]
        .costPerUnit * obj.job.matleadValleysActReq
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matleadValleysActReq]);
// 11
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matdryValleyCost = Number(
      materialRates.filter((a) => a.materialName === "GRP Valley Tray")[0]
        .costPerUnit * obj.job.matdryValleyActReq
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matdryValleyActReq]);
// 12
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matridgeCost = (
      obj.job.matridgeMaterialActReq *
      materialRates.filter((a) => a.materialName === "Concrete Ridge")[0]
        .costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matridgeMaterialActReq]);
// 13
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.mathipsCost = (
      obj.job.mathipsMaterialActReq *
      materialRates.filter((a) => a.materialName === "Concrete Ridge")[0]
        .costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.mathipsMaterialActReq]);
// 14
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matsandCost = (
      obj.job.matsandActReq *
      materialRates.filter((a) => a.materialName === "Sand")[0].costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matsandActReq]);
// 15
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matcementCost = (
      obj.job.matcementActReq *
      materialRates.filter((a) => a.materialName === "Cement")[0].costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matcementActReq]);
// 16
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matSealantsCost = (
      obj.job.matSealantsActReq *
      materialRates.filter((a) => a.materialName === "Sealants")[0].costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matSealantsActReq]);
// 17
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matdryRidgeKitCost = (
      obj.job.matdryRidgeKitActReq *
      materialRates.filter((a) => a.materialName === "Dry Ridge Kit")[0]
        .costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matdryRidgeKitActReq]);
// 18
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matHipSupportTraysCost = (
      obj.job.matHipSupportTraysActReq *
      materialRates.filter((a) => a.materialName === "HIP Supoort Tray")[0]
        .costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matHipSupportTraysActReq]);
// 19
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matUnderCloakCost = (
      obj.job.matUnderCloakActReq *
      materialRates.filter(
        (a) => a.materialName === "Cement Fibre Under Cloak"
      )[0].costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matUnderCloakActReq]);
// 20
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matventTilescostCost = (
      obj.job.matventTilesMaterialActReq *
      materialRates.filter((a) => a.materialName === "Vent Tile")[0].costPerUnit
    ).toFixed(2);

    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matventTilesMaterialActReq]);
// 21
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matleadSlatecost = (
      obj.job.matleadslateActReq *
      materialRates.filter((a) => a.materialName === "Lead Saddle")[0]
        .costPerUnit
    ).toFixed(2);

    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matleadslateActReq]);
// 22
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matboxGutterLeadCost = (
      obj.job.matboxGutterLeadActReq *
      materialRates.filter((a) => a.materialName == "Box Gutter Lead")[0]
        .costPerUnit
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matboxGutterLeadActReq]);
// 23
useEffect(() => {
  if (calculatedOnce == true && formData.job.tileTypeId == 3) {
    const obj = { ...formData };
    obj.job.matdryVergeCost = (
      Number(obj.job.matdryVergeActReq) *
      Number(
        materialRates.filter(
          (a) => a.materialName === "Dry Verge Unit (Tile Only)"
        )[0].costPerUnit
      )
    ).toFixed(2);
    obj.job.materialCost = materialCosttileTypeId3(obj);
    obj.job.totalCost = (
      Number(obj.job.materialCost) + parseFloat(obj.job.labourCost)
    ).toFixed(2);
    setFormData(obj);
  }
}, [formData.job.matdryVergeActReq]);

return(
  <>
  {
  formData.job.tileTypeId == 3 && (
    <table id="datatablesSimple">
      <thead>
        <tr>
          <th width="28%">Material</th>
          <th width="22%"></th>
          <th width="25%">Required Amount</th>
          <th width="400px">Estimated Cost</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Tiles</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matboxGutterLeadActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matSlateActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>

         
          <td>£ {formData.job.matslateCost}</td>
        </tr>
        <tr>
          <td>Left Hand Verge Tiles</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matleftHandVergeActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matleftHandVergeActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matleftHandVergeCost}</td>
        </tr>
        <tr>
          <td>Eave Felt</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.mateaveFeltActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.mateaveFeltActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.mateaveFeltCost}</td>
        </tr>
        <tr>
          <td>Eave Comb Filler</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.eaveCombFillerActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.eaveCombFillerActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.eaveCombFillerCost}</td>
        </tr>
        <tr>
          <td>Roofing Membrane</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matroofingMembraneActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matroofingMembraneActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matroofingMembraneCost}</td>
        </tr>
        <tr>
          <td>Batten</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matbattenActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matbattenActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matbattenCost}</td>
        </tr>
        <tr>
          <td>Batten Nails</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matbattenNailsActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matbattenNailsActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matbattenNailsCost}</td>
        </tr>
        <tr>
          <td>Tiles Nails</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matslateTileNailsActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matslateTileNailsActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matslateTileNailsCost}</td>
        </tr>
        <tr>
          <td>Lead Flashings</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matleadFlashingsActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matleadFlashingsActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matleadFlashingsCost}</td>
        </tr>
        <tr>
          <td>Lead Valleys</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matleadValleysActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matleadValleysActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
          <td> {formData.job.}</td>
          <td>£ {formData.job.matleadValleysCost}</td>
        </tr>
        <tr>
          <td>Dry Valley</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matdryValleyActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matdryValleyActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matdryValleyCost}</td>
        </tr>
        <tr>
          <td>Ridge</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matridgeMaterialActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matridgeMaterialActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matridgeCost}</td>
        </tr>
        <tr>
          <td>Hips</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.mathipsMaterialActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.mathipsMaterialActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {Number(formData.job.mathipsCost).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Sand</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matsandActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matsandActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matsandCost}</td>
        </tr>
        <tr>
          <td>Cement</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matcementActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matcementActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matcementCost}</td>
        </tr>
        <tr>
          <td>Sealants</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matSealantsActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matSealantsActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matSealantsCost}</td>
        </tr>
        <tr>
          <td>Dry ridge kit</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matdryRidgeKitActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matdryRidgeKitActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matdryRidgeKitCost}</td>
        </tr>
        <tr>
          <td>HIP support trays</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matHipSupportTraysActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matHipSupportTraysActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matHipSupportTraysCost}</td>
        </tr>
        <tr>
          <td>Under Cloak</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matUnderCloakActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matUnderCloakActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matUnderCloakCost}</td>
        </tr>
        <tr>
          <td>Dry Verge</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matdryVergeActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matdryVergeActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matdryVergeCost}</td>
        </tr>
        <tr>
          <td>Vent Tiles</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matventTilesMaterialActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matventTilesMaterialActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matventTilescostCost}</td>
        </tr>
        <tr>
          <td>Lead Slate</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matleadSlateMaterialActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matleadSlateMaterialActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matleadSlatecost}</td>
        </tr>

        <tr>
          <td>Box Gutter Lead</td>
          <td></td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matboxGutterLeadActReq}
              onChange={(e) => {
                const obj = { ...formData };
                const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = sanitizedValue.split(".").length - 1;
                if (dotCount > 1) {
                  return;
                }
                obj.job.matboxGutterLeadActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
         
          <td>£ {formData.job.matboxGutterLeadCost}</td>
        </tr>

        <tr>
          <td>
            <strong>Material Cost</strong>
          </td>
          <td></td>

          <td></td>

          <td>£ {formData.job.materialCost}</td>
        </tr>
      </tbody>
    </table>
  );
}

  </>
)