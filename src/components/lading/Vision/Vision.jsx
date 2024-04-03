import { List, Tabs, rem } from "@mantine/core";
//import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

export default function Vision() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs color="red" defaultValue="mision">
      <Tabs.List grow justify="space-between">
        <Tabs.Tab value="mision">Misión</Tabs.Tab>
        <Tabs.Tab value="vision">Visión</Tabs.Tab>
        <Tabs.Tab value="valores">Valores</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="mision" className="py-5">
        <h3 className="font-bold text-2xl mb-4">
          Transformamos vidas a través del acceso a productos
        </h3>
        <p className="text-[gray] vision-text">
          {" "}
          esenciales de alta calidad a precios accesibles. Nuestra misión es
          brindar a cada hogar la oportunidad de acceder a alimentos y productos
          esenciales con precios justos, promoviendo así una sociedad más
          equitativa y próspera. especialmente aquellos en situación de
          vulnerabilidad.
        </p>
      </Tabs.Panel>

      <Tabs.Panel value="vision" className="py-5">
        <h3 className="font-bold text-2xl mb-4">
          Aspiramos a ser un faro de esperanza
        </h3>
        <p className="text-[gray] vision-text">
          Ser el motor del cambio positivo, inspirando a otras empresas a
          adoptar prácticas responsables y solidarias. Aspiramos a ser
          reconocidos como líderes en la promoción de la igualdad de
          oportunidades y la justicia social en los millones de peruanos.
        </p>
      </Tabs.Panel>

      <Tabs.Panel value="valores" className="py-5">
        <List type="ordered" className="flex flex-col gap-5">
          <List.Item>
            <h4 className="font-semibold flex mb-2">
              Equidad y accesibilidad:
            </h4>{" "}
            <p className="text-[gray] vision-text">
              Creemos en un mundo donde todos tienen derecho a acceder a
              productos de calidad a precios justos, independientemente de su
              situación económica.
            </p>
          </List.Item>
          <List.Item>
            <h4 className="font-semibold flex mb-2">
              Colaboración y cooperación:
            </h4>{" "}
            <p className="text-[gray] vision-text">
              Nos comprometemos a trabajar en estrecha colaboración con
              organizaciones sociales y comunitarias para abordar las
              necesidades más apremiantes de nuestra sociedad.
            </p>
          </List.Item>
          <List.Item>
            <h4 className="font-semibold flex mb-2">
              Integridad y transparencia:
            </h4>{" "}
            <p className="text-[gray] vision-text">
              Actuamos con honestidad y transparencia en todas nuestras
              operaciones, construyendo relaciones de confianza con nuestros
              clientes, empleados y socios.
            </p>
          </List.Item>
          <List.Item>
            <h4 className="font-semibold flex mb-2">Empatía y servicio:</h4>
            <p className="text-[gray] vision-text">
              Nos esforzamos por comprender las necesidades y preocupaciones de
              nuestros clientes, brindando un servicio personalizado y atento en
              todo momento. Buscamos constantemente nuevas formas de servir a
              nuestra comunidad, adoptando tecnologías y prácticas comerciales
              que promuevan la inclusión y la sostenibilidad.
            </p>
          </List.Item>
        </List>
      </Tabs.Panel>
    </Tabs>
  );
}
