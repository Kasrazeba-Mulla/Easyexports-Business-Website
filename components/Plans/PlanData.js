import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./PlanData.module.css";
import { PLAN_ITEMS } from "./PlanItems";

function PopulateData() {
  const showPlan = useSelector((state) => state.plan.planIsShown);

  return (
    <Fragment>
      {showPlan && (
        <div className={classes["show-table"]}>
          <div className="col-md-8">
            <div className="card text-center">
              <div className="card-header">
                <h3 className="font-weight-bold text-center">
                  Available Plans
                </h3>
              </div>
              <div className="card-body">
                <table className="table table-dark table-stripped table-bordered">
                  <thead className="bg-dark text-white">
                    <tr>
                      <td className="font-weight-bold text-center">Plan</td>

                      <td className="font-weight-bold text-center">Products</td>
                      <td className="font-weight-bold text-center">
                        Communications
                      </td>
                      <td className="font-weight-bold text-center">
                        Results Per Search
                      </td>
                      <td className="font-weight-bold text-center">
                        File Transferring
                      </td>
                      <td className="font-weight-bold text-center">
                        Smart Notifications
                      </td>
                      <td className="font-weight-bold text-center">
                        Data Analysis Reports
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {PLAN_ITEMS.map((data) => {
                      return (
                        <tr>
                          <td className="font-weight-bold text-center">
                            {data.id}
                          </td>
                          <td className="font-weight-bold text-center">
                            {data.products}
                          </td>
                          <td className="font-weight-bold text-center">
                            {data.communications}
                          </td>
                          <td className="font-weight-bold text-center">
                            {data.resultsPerSearch}
                          </td>
                          <td className="font-weight-bold text-center">
                            {data.fileTransferring}
                          </td>
                          <td className="font-weight-bold text-center">
                            {data.smartNotifications}
                          </td>
                          <td className="font-weight-bold text-center">
                            {data.dataAnalysisReports}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default PopulateData;
