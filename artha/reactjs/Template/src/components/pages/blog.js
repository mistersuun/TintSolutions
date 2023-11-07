import React from 'react';
import { Link } from '@reach/router';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';


export default () => (
<div className='wraperitem'>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Blog</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid' id="blog">
        <div className='row m-10-hor'>
          <div className='col-md-8'>
            <div className='left'>
              <div className='mainimg'>
                <img
                    src="./img/service3.jpg"
                    alt="imgservice"
                  />
              </div>
              <div className='content'>
                <div className='title'>
                  Exterior
                </div>
                <div className='desc'>
                  <p>An international firm of architects, planners and interior designers specialising in a wide range of commercial, residential and public sector projects.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting </p>
                  <blockquote>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                    elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                  </blockquote>
                  <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='right'>
              <h3>Recent posts</h3>
              <ul className='recent-post'>
                <li>
                  <Link className='recent' to="/blog">
                    <div className='img'>
                      <img
                        src="./img/service.jpg"
                        alt="imgservice"
                      />
                    </div>
                    <div className='contblog'>
                      <div className='title'>
                        Lorem ipsum dolor sit
                      </div>
                      <div className='descblog'>
                        Mazim alienum appellantur eu cu ullum officiis pro pri 
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='recent' to="/blog">
                    <div className='img'>
                      <img
                        src="./img/service2.jpg"
                        alt="imgservice"
                      />
                    </div>
                    <div className='contblog'>
                      <div className='title'>
                        Maiorum ponderum eum
                      </div>
                      <div className='descblog'>
                        Mazim alienum appellantur eu cu ullum officiis pro pri 
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='recent' to="/blog">
                    <div className='img'>
                      <img
                        src="./img/service3.jpg"
                        alt="imgservice"
                      />
                    </div>
                    <div className='contblog'>
                      <div className='title'>
                        Et mei iusto dolorum
                      </div>
                      <div className='descblog'>
                        Mazim alienum appellantur eu cu ullum officiis pro pri 
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
              <h3>Tags</h3>
              <ul className='tags'>
                <li>
                  <Link className='tag' to="/blog">Interior</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Trend</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Photography</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Design</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Exterior</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Website</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">React Js</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Creative</Link>
                </li>
              </ul>
              <div className='bannerservice'>
                <div className='imgbg'>
                  <img
                    src="./img/bg-widget.jpg"
                    alt="imgservice"
                  />
                </div>
                <div className='contb'>
                  <div className='headingb'>
                    Get A quote 
                  </div>
                  <div className='descb'>
                    With Experts Advice 
                  </div>
                  <div className="btn" onClick={()=> window.open("/#", "_self")}>
                    <span className="shine"></span>
                    <span>Download here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>

  <Testimony />
  <Footer />
</div>

);
