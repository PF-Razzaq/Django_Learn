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
