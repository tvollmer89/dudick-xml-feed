/**
 * 
 * @param {object} oldList - original list from DPM XML
* @return {array} new product list as JSON object
 */
const updateList = oldList => {
  let newList = [];
  oldList.forEach((p) => {
    let newProd = {
      name
    };
    let types = setProdInfo(p, "producttypes", "producttype");
    let applications = setProdInfo(p, "prodapplications", "application");
    let markets = setProdInfo(p, "prodmarkets", "market");
    let f = setProdInfo(p, "productfeatures", "productfeature");



  })
  let list = JSON.stringify(newList);
  document.getElementById("feed-container").innerHTML = list;
  return newList;
}

const setProdInfo = (prod, groupName, itemName) => {
  if(groupName == "prodapplications"){
    // TODO: Ignore Misc. 

  }

  // TODO: instead of this, assign to a product object (make sure to filter out "Misc" from applications!) 
  let d = !prod[groupName].hasOwnProperty(itemName) ? "" : prod[groupName][itemName];
  let detail = typeof d != "string" ? d.join(", ") : d;
  return detail;
}


export {updateList}