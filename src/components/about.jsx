export const About = (props) => {
  return (
    <div id={props.id} className="mt-4">
      <div className="container">
        <div className="row">
          {props.left ? (
            <>
              <div className="col-xs-12 col-md-6">
                {" "}
                <img
                  src={props.data ? props.data.image : "img/about.jpg"}
                  className="img-responsive"
                  alt=""
                />{" "}
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>{props.data ? props.data.title : "loading..."}</h2>
                  <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>{props.data ? props.data.title : "loading..."}</h2>
                  <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                {" "}
                <img
                    src={props.data ? props.data.image : "img/about.jpg"}
                    className="img-responsive"
                  alt=""
                />{" "}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
