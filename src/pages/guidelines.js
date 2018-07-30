import React from 'react'
import Link from 'gatsby-link'

const OverviewPage = () => (
  <div className="side-nav-page">
  <nav>
      <ul>
        <li>
          <Link to="guidelines/color">Color</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
        <li>
          <Link to="">Page</Link>
        </li>
      </ul>
  </nav>
  
  <article className="main-content">
    <h1>Guidelines</h1>
    <p>Content would go here. Special.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae lacus sed augue faucibus tincidunt sit amet ut mi. Nullam lacus nulla, mattis vitae posuere facilisis, aliquet quis nisi. Vestibulum vel tellus lacus. Pellentesque id risus nunc. Suspendisse dictum sed dolor vel scelerisque. Etiam aliquet ullamcorper arcu. Proin et tortor et nisl interdum tristique tempus at enim. Nam nec ipsum tortor. Etiam nec sem sagittis, faucibus odio in, molestie diam. Nam fringilla sapien quam, condimentum maximus sapien ultricies sit amet. Sed quis urna aliquam, aliquet libero eu, rutrum neque. Nunc faucibus nulla eu vulputate lobortis. Donec hendrerit semper pulvinar.</p>

<p>Nulla ac leo in purus consectetur sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent porttitor erat magna, facilisis pharetra nulla tincidunt ac. Duis maximus dui vitae ligula ullamcorper varius. Nullam sed pretium massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur nunc ante, vehicula et sodales eget, facilisis sed ipsum. Maecenas vitae arcu blandit, dignissim arcu eu, condimentum augue. Donec accumsan urna in ipsum laoreet, vel placerat ex aliquet. Mauris pellentesque massa lorem, nec ultricies ex lobortis sed. Phasellus vehicula quam in eros molestie, quis vulputate augue sodales. Sed vulputate venenatis magna, vitae pellentesque velit luctus non. Sed consectetur metus elit, in congue tellus lobortis a. Maecenas facilisis velit augue, et ultricies felis porttitor vitae.</p>

<p>Vestibulum vitae egestas mauris, id malesuada mauris. Aliquam erat volutpat. Sed et varius metus. Integer id nisi eget nulla lacinia feugiat convallis ut tellus. Phasellus bibendum ut diam a rutrum. Quisque molestie tristique arcu, ultricies consequat magna tristique in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac dictum diam. Maecenas lobortis porttitor lorem eget pharetra. Cras a diam dui. Nam nec enim sed lorem egestas interdum at vel tortor. Mauris eu nulla velit. Phasellus et ante id augue imperdiet faucibus. Donec tortor metus, dictum sed pellentesque sit amet, accumsan a ipsum.</p>

<p>Duis at faucibus enim. Etiam nec auctor metus, eu gravida eros. Pellentesque sit amet leo nec orci dapibus sodales sed ut enim. Sed imperdiet hendrerit rutrum. Quisque dignissim lectus luctus, vehicula lacus a, posuere mauris. Aliquam ut lectus a turpis consequat vulputate nec in lectus. In ac suscipit tellus. Nunc malesuada interdum ipsum, et hendrerit ligula porta id.</p>

<p>Nunc aliquet massa non nisl vulputate facilisis. Vestibulum libero leo, consequat ut erat vel, aliquam maximus ligula. Sed scelerisque lacinia turpis. Praesent finibus, sapien a posuere varius, turpis tellus fringilla libero, id mattis tellus lorem vitae tellus. Donec bibendum ipsum et iaculis egestas. Aenean bibendum iaculis quam ac malesuada. Sed varius tempus dictum. Vivamus nunc justo, blandit at tellus ut, feugiat efficitur urna. Nulla consequat libero a leo auctor posuere. Maecenas varius libero in eros bibendum congue.</p>

    <Link to="/">Go home, Timmy.</Link>
  </article>
  </div>
)

export default OverviewPage