<tr>
  <td>Box Gutter Lead</td>

  <td>£ {formData.job.matboxGutterLeadCost}</td>
</tr>;
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
                obj.job.matboxGutterLeadActReq = Number(sanitizedValue);
                setFormData(obj);
              }}
            />
          </td>
          <td>
            <input
              className="qouteInputs"
              value={formData.job.matSlateActReq}
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
          <td>{formData.job.matleftHandVergeActReq}</td>
          <td>£ {formData.job.matleftHandVergeCost}</td>
        </tr>
        <tr>
          <td>Eave Felt</td>
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
          <td>{formData.job.mateaveFeltActReq}</td>
          <td>£ {formData.job.mateaveFeltCost}</td>
        </tr>
        <tr>
          <td>Eave Comb Filler</td>
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
          <td>{formData.job.eaveCombFillerActReq}</td>
          <td>£ {formData.job.eaveCombFillerCost}</td>
        </tr>
        <tr>
          <td>Roofing Membrane</td>
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
          <td>{formData.job.matroofingMembraneActReq}</td>
          <td>£ {formData.job.matroofingMembraneCost}</td>
        </tr>
        <tr>
          <td>Batten</td>
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
          <td>{formData.job.matbattenActReq}</td>
          <td>£ {formData.job.matbattenCost}</td>
        </tr>
        <tr>
          <td>Batten Nails</td>
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
          <td>{formData.job.matbattenNailsActReq}</td>
          <td>£ {formData.job.matbattenNailsCost}</td>
        </tr>
        <tr>
          <td>Tiles Nails</td>
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
          <td>{formData.job.matslateTileNailsActReq}</td>
          <td>£ {formData.job.matslateTileNailsCost}</td>
        </tr>
        <tr>
          <td>Lead Flashings</td>
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
          <td>{formData.job.matleadFlashingsActReq}</td>
          <td>£ {formData.job.matleadFlashingsCost}</td>
        </tr>
        <tr>
          <td>Lead Valleys</td>
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
          <td> {formData.job.matleadValleysActReq}</td>
          <td>£ {formData.job.matleadValleysCost}</td>
        </tr>
        <tr>
          <td>Dry Valley</td>
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
          <td>{formData.job.matdryValleyActReq}</td>
          <td>£ {formData.job.matdryValleyCost}</td>
        </tr>
        <tr>
          <td>Ridge</td>
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
          <td>{formData.job.matridgeMaterialActReq}</td>
          <td>£ {formData.job.matridgeCost}</td>
        </tr>
        <tr>
          <td>Hips</td>
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
          <td>{formData.job.mathipsMaterialActReq}</td>
          <td>£ {Number(formData.job.mathipsCost).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Sand</td>
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
          <td>{formData.job.matsandActReq}</td>
          <td>£ {formData.job.matsandCost}</td>
        </tr>
        <tr>
          <td>Cement</td>
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
          <td>{formData.job.matcementActReq}</td>
          <td>£ {formData.job.matcementCost}</td>
        </tr>
        <tr>
          <td>Sealants</td>
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
          <td>{formData.job.matSealantsActReq}</td>
          <td>£ {formData.job.matSealantsCost}</td>
        </tr>
        <tr>
          <td>Dry ridge kit</td>
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
          <td>{formData.job.matdryRidgeKitActReq}</td>
          <td>£ {formData.job.matdryRidgeKitCost}</td>
        </tr>
        <tr>
          <td>HIP support trays</td>
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
          <td>{formData.job.matHipSupportTraysActReq}</td>
          <td>£ {formData.job.matHipSupportTraysCost}</td>
        </tr>
        <tr>
          <td>Under Cloak</td>
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
          <td>{formData.job.matUnderCloakActReq}</td>
          <td>£ {formData.job.matUnderCloakCost}</td>
        </tr>
        <tr>
          <td>Dry Verge</td>
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
          <td>{formData.job.matdryVergeActReq}</td>
          <td>£ {formData.job.matdryVergeCost}</td>
        </tr>
        <tr>
          <td>Vent Tiles</td>
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
          <td>{formData.job.matventTilesMaterialActReq}</td>
          <td>£ {formData.job.matventTilescostCost}</td>
        </tr>
        <tr>
          <td>Lead Slate</td>
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
          <td>{formData.job.matleadSlateMaterialActReq}</td>
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
          <td>{formData.job.matboxGutterLeadActReq}</td>
          <td>£ {formData.job.matboxGutterLeadCost}</td>
        </tr>

        <tr>
          <td>
            <strong>Material Cost</strong>
          </td>
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
          <td>£ {formData.job.materialCost}</td>
        </tr>
      </tbody>
    </table>
  );
}
