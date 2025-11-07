import { certifications } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Certifications</h3>

      <div className="client-container">
        {certifications.map((item) => (
          <div key={`cert-${item.id}`} className="client-review">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <p className="font-semibold text-white-800 text-xl">{item.title}</p>
                  <p className="text-white-500 md:text-base text-sm">{item.issuer}</p>
                  <p className="text-white-600 text-sm">{item.date}</p>
                </div>
              </div>
              
              <p className="text-white-700 font-light">{item.description}</p>
              
              {item.pdf && (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-fit"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
